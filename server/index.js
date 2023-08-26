import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
//initializing the MongoDB connection
const uri = `${process.env.MONGO_URI}`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/* client.connect(err => {
	  const collection = client.db("test").collection("devices");
	  // perform actions on the collection object
	  client.close();
}); */
const connectToMongo = async () => {
  try {
	await client.connect();
	console.log("Connected correctly to server");
  } catch (err) {
	console.log(err.stack);
  }
}
connectToMongo();

app.use(express.json()); 

app.use(cors(
  { origin: "*" }
));

const port = process.env.PORT || 3005;

import generate from "./generate.js";

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

console.log("hello from server")


app.post("/generate", async (req, res) => {
  try {
    const { queryDescription, dbName } = req.body
    console.log(queryDescription, dbName )
    const dbQuery = await generate(queryDescription, dbName);
    res.json({ dbQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
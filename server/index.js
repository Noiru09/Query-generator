import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
//initializing the MongoDB connection
const uri = `${process.env.MONGO_URI}`;
export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Pass the MongoDB client to routes
const routes = require("./routes")(client);

app.use(express.json());

app.use(cors({ origin: "*" }));

const port = process.env.PORT || 3005;

import generate from "./generate.js";

app.listen(port, () => {
  client.connect();
  console.log(`Listening on port ${port}...`);
});

app.use("/", routes);

console.log("hello from server");


import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
//initializing the MongoDB connection
const uri = `${process.env.MONGO_URI}`;
const client = new MongoClient(uri, {
	serverApi: {
	  version: ServerApiVersion.v1,
	  strict: true,
	  deprecationErrors: true,
	}
});

// Pass the MongoDB client to routes
import routes from "./routes.js";

const configuredRoutes = routes(client);


app.use(express.json());

app.use(cors({ origin: "*" }));

const port = process.env.PORT || 3005;

app.listen(port, () => {
  client.connect();
  console.log(`Listening on port ${port}...`);
});

app.use("/", configuredRoutes);

console.log("hello from server");


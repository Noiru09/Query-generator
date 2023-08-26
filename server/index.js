import express from "express";
import cors from "cors";

const app = express();
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
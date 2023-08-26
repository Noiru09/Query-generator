import express from "express";
import generate from "./generate.js";

const router = express.Router();

const routes = (client) => {
  router.post("/generate", async (req, res) => {
    try {
      const { queryDescription, dbName } = req.body;
      console.log(queryDescription, dbName);
      const dbQuery = await generate(queryDescription, dbName);
      res.json({ dbQuery });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  //getting documents from the database according to the dbName attribute of the history collection
  router.get("/history/:dbName", async (req, res) => {
    try {
      const historyCollection = client.db("QueryGen").collection("history");
      console.log("Requested dbName:", req.params.dbName);
      const historyData = await historyCollection
        .find({ dbName: req.params.dbName })
        .toArray();
      res.json(historyData);
      console.log(historyData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return router;
};

export default routes;

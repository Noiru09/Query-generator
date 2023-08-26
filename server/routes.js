import express from "express";

const router = express.Router();

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

module.exports = router;
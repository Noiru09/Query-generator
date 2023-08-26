import express from "express";
import cors from "cors";
const jwtUtils = require("./utils/jwt.js");
const User = require("./models/userSchema.js");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); 

app.use(cors(
  { origin: "*" }
));

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`MongoDB Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});

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

app.post("/login", async (req, res) => {
  try {
		const {username, password} = req.body
		const user = await User.findOne({ username: username }).select(
			"+password"
		);
		if (!user) {
			return res
				.status(401)
				.json({ error: "Invalid username or password" });
		}

		const isMatch = await user.validatePassword(password);

		if (!isMatch) {
			return res
				.status(401)
				.json({ error: "Invalid password" });
		}

		const token = jwtUtils.createToken(user._id);
		res.status(200).json({ token });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
})
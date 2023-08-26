const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWTsecret = process.env.JWT_SECRET;

exports.createToken = (userId) => {
	const token = jwt.sign({ id: userId }, JWTsecret, { expiresIn: "1h" });
	return token;
};

exports.verifyToken = (req, res, next) => {
	let token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	if (token.startsWith("Bearer")) {
		token = token.slice(7, token.length).trimLeft();
	}

	const verified = jwt.verify(token, JWTsecret);
	if (!verified) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	next();
};

const express = require("express");
const api = express.Router();

const router = require("./v1/routes/routes");

api.use("/v1", router);

api.get("/", (req, res) => {
	res.redirect("/api/v1");
});

module.exports = api;

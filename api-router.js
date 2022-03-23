const express = require("express");
const path = require("path");
const api = express.Router();

const router = require("./v1/routes/routes");

api.use(express.static(path.join(__dirname, "v1", "public")));
api.use("/v1", router);

api.get("/", (req, res) => {
	res.redirect("/api/v1");
});

module.exports = api;

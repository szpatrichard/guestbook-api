const express = require("express");
const path = require("path");
const api = express.Router();

const guestbookRouter = require("./v1/routes/guestbook");

api.use(express.static(path.join(__dirname, "v1", "public")));
api.use("/", guestbookRouter);

module.exports = api;

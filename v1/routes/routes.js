/* Imports */
const express = require("express");
const router = express.Router();

/* Routes */
const guestbookRouter = require("./guestbook");
const entryRouter = require("./entry");

/* Middlewares */
router.use("/", guestbookRouter);
router.use("/entry", entryRouter);

/* Exports */
module.exports = router;

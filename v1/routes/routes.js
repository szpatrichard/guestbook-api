/* Imports */
const express = require("express");
const router = express.Router();

/* Routes */
const guestbookRouter = require("./guestbook");
const entryRouter = require("./entry");

/* Middlewares */
router.use("/entries", guestbookRouter);
router.use("/entry", entryRouter);

router.use("/", (req, res) => {
	res.redirect("/api/v1/entries");
});

/* Exports */
module.exports = router;

/* Imports */
const express = require("express");
const router = express.Router();

/* Models */
const Entry = require("../models/entry").Entry;

/* GET all guestbook entries. */
router.get("/", (req, res) => {
	Entry.fetchAll((err, rows) => {
		if (err) console.error(err.message);
		if (rows.length == 0) {
			res.status(404).json({ message: "Guestbook is empty." });
			return;
		}
		res.json(rows);
	});
});

/* Exports */
module.exports = router;

/* Imports */
const express = require("express");
const router = express.Router();

/* Models */
const Entry = require("../models/entry").Entry;

/* Controllers */
const { createEntry } = require("../controllers/create-entry");
const { editEntry } = require("../controllers/edit-entry");
const { removeEntry } = require("../controllers/remove-entry");

/* GET a single entry */
router.get("/:slug", (req, res) => {
	const { slug } = req.params;
	Entry.fetchOne(slug, (err, row) => {
		if (err) console.error(err.message);
		if (!row) res.status(404).json({ message: "Entry not found." });
		res.json(row);
	});
});

/* POST a new entry */
router.post("/", createEntry);

/* POST an edited entry */
router.post("/:slug", editEntry);

/* DELETE an entry */
router.delete("/:slug", removeEntry);

/* Exports */
module.exports = router;

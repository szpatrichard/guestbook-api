const express = require("express");
const router = express.Router();

const { createEntry } = require("../controllers/create-entry");
const { editEntry } = require("../controllers/edit-entry");
const { removeEntry } = require("../controllers/remove-entry");

/* GET a single entry */
router.get("/:slug", (req, res, next) => {
	const { slug } = req.params;
	const { entries } = req.app.locals;
	const entry = entries.find((entry) => entry.slug === slug);
	if (!entry) {
		res.status(404).json({ error: "Entry not found." });
	}
	res.json(entry);
});

/* Create a new entry */
router.post("/", createEntry);

/* Edit an entry */
router.post("/:slug", editEntry);

/* Delete an entry */
router.delete("/:slug", removeEntry);

module.exports = router;

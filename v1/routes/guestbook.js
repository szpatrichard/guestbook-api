const express = require("express");
const router = express.Router();

const entryRouter = require("./entry");

/* Use entry route for a single entry */
router.use("/entry", entryRouter);

/* GET all guestbook entries. */
router.get("/", (req, res, next) => {
	const { entries } = req.app.locals;
	if (entries.length > 0) {
		res.json(req.app.locals.entries);
	} else {
		res.status(404).json({ message: "Guestbook is empty." });
	}
});

module.exports = router;

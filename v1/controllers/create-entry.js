/* Imports */
const slug = require("slug");

/* Models */
const Entry = require("../models/entry").Entry;

const createEntry = (req, res) => {
	const { title, content, author } = req.body;

	if (!title) {
		res.status(400).json({ message: "Entries must have a title." });
		return;
	}
	if (!content) {
		res.status(400).json({ message: "Entries must have some content." });
		return;
	}
	if (!author) {
		res.status(400).json({ message: "Entries must have an author." });
		return;
	}

	const publishedDate = new Date();
	const slugLink = slug(`${publishedDate.valueOf()} ${title}`);

	/* Entry object storing its data */
	const entry = {
		author,
		content,
		publishedDate,
		slug: slugLink,
		title,
	};

	/* Create a new entry record */
	Entry.create(entry, (err) => {
		if (err) console.error(err.message);
	});

	/* Redirect to the new entry */
	res.redirect(`${req.app.locals.API_V1_ROUTE}/entry/${slugLink}`);
};

/* Exports */
module.exports = {
	createEntry,
};

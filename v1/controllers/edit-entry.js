/* Models */
const Entry = require("../models/entry").Entry;

const editEntry = (req, res) => {
	const { slug } = req.params;
	const { content } = req.body;

	if (!content) {
		res.status(400).json({ message: "Entry must have some content." });
		return;
	}

	/* Check if the entry exists */
	Entry.fetchOne(slug, (err, row) => {
		if (err) console.error(err.message);
		if (!row) {
			res.status(404).json({ message: "Entry not found." });
			return;
		}

		const editData = {
			content,
			editedDate: new Date(),
			slug,
		};

		/* Edit the content if the entry exists and redirect to the entry */
		Entry.editContent(editData, (err) => {
			if (err) console.error(err.message);
			res.redirect(`${req.app.locals.API_V1_ROUTE}/entry/${slug}`);
		});
	});
};

/* Exports */
module.exports = {
	editEntry,
};

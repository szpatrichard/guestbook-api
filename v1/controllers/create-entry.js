const slug = require("slug");

const createEntry = (req, res, next) => {
	const { title, content, author } = req.body;
	if (!title) {
		res.status(400).json({ error: "Entries must have a title." });
		return;
	}
	if (!content) {
		res.status(400).json({ error: "Entries must have some content." });
		return;
	}
	if (!author) {
		res.status(400).json({ error: "Entries must have an author." });
		return;
	}

	const publishedDate = new Date();
	const slugLink = slug(`${publishedDate.valueOf()} ${title}`);
	req.app.locals.entries.push({
		author,
		content,
		publishedDate,
		slug: slugLink,
		title,
	});

	res.redirect(`${req.app.locals.API_V1_ROUTE}/entry/${slugLink}`);
};

module.exports = {
	createEntry,
};

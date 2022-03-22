const editEntry = (req, res, next) => {
	const { content } = req.body;
	const { slug } = req.params;
	const { entries } = req.app.locals;
	const entry = entries.find((entry) => entry.slug === slug);

	if (!entry) {
		res.status(404).send("Entry not found.");
		return;
	}
	if (!content) {
		res.status(400).send("Entry must have some content.");
		return;
	}

	entry.content = content;
	res.redirect(`/api/v1/entry/${slug}`);
};

module.exports = {
	editEntry,
};

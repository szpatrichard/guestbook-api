const editEntry = (req, res, next) => {
	const { content } = req.body;
	const { slug } = req.params;
	const { entries } = req.app.locals;
	const entry = entries.find((entry) => entry.slug === slug);

	if (!entry) {
		res.status(404).json({ error: "Entry not found" });
		return;
	}
	if (!content) {
		res.status(400).json({ error: "Entry must have some content." });
		return;
	}

	entry.content = content;
	res.redirect(`${req.app.locals.API_V1_ROUTE}/entry/${slug}`);
};

module.exports = {
	editEntry,
};

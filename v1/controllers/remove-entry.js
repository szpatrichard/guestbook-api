const removeEntry = (req, res, next) => {
	const { slug } = req.params;
	const { entries } = req.app.locals;
	const entry = entries.find((entry) => entry.slug === slug);

	if (!entry) {
		res.status(404).json({ error: "Entry not found." });
		return;
	}

	entries.splice(entries.indexOf(entry), 1);
	res.redirect(`${req.app.locals.API_V1_ROUTE}`);
};

module.exports = {
	removeEntry,
};

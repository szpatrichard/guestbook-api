/* Imports */
const db = require("../../configs/db.config");

/* Entry Model */
class Entry {
	/* Fetch all entries */
	static fetchAll(cb) {
		const fetchAllQuery = "SELECT * FROM entry";
		db.all(fetchAllQuery, cb);
	}

	/* Fetch all entries */
	static fetchAllByNewestDate(cb) {
		const fetchAllQuery = "SELECT * FROM entry ORDER BY publishedDate DESC";
		db.all(fetchAllQuery, cb);
	}

	/* Fetch all entries */
	static fetchAllByOldestDate(cb) {
		const fetchAllQuery = "SELECT * FROM entry ORDER BY publishedDate ASC";
		db.all(fetchAllQuery, cb);
	}

	/* Fetch a single entry */
	static fetchOne(slug, cb) {
		const fetchOneQuery = "SELECT * FROM entry WHERE slug=?";
		db.get(fetchOneQuery, slug, cb);
	}

	/* Populate entry data into table */
	static create(data, cb) {
		const createQuery =
			"INSERT INTO entry(title, content, author, slug, publishedDate) VALUES (?, ?, ?, ?, ?)";
		db.run(
			createQuery,
			data.title,
			data.content,
			data.author,
			data.slug,
			data.publishedDate.toISOString(),
			cb
		);
	}

	/* Update content of an entry */
	static editContent(data, cb) {
		const editContentQuery =
			"UPDATE entry SET content=?, editedDate=? WHERE slug=?";
		db.run(
			editContentQuery,
			data.content,
			data.editedDate.toISOString(),
			data.slug,
			cb
		);
	}

	/* Remove an entry */
	static delete(slug, cb) {
		if (!slug) throw Error("Please provide a slug.");
		const deleteQuery = "DELETE FROM entry WHERE slug=?";
		db.run(deleteQuery, slug, cb);
	}
}

/* Exports */
module.exports = {
	db,
	Entry,
};

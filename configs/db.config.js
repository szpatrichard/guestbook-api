/* Imports */
const path = require("path");
const sqlite = require("sqlite3").verbose();
require("dotenv").config();

/* Path to database */
const DB_PATH =
	process.env.DB_PATH ||
	path.resolve(__dirname, "..", "data", "guestbook.db");

/* Open database connection */
const db = new sqlite.Database(DB_PATH, (err) => {
	if (err) {
		console.error(err.message);
		return err;
	}
	console.log(`Connected to ${DB_PATH} database.`);

	/* Enable foreign keys */
	db.exec("PRAGMA foreign_keys = ON;", (err) => {
		if (err) {
			console.error(err.message);
			return err;
		}
		console.log("Foreign key enforcement is on.");
	});
});

/* Run queries in series */
db.serialize(() => {
	/* Create table for entries */
	db.exec(
		`
			CREATE TABLE IF NOT EXISTS entry (
				id INTEGER PRIMARY KEY NOT NULL,
				title TEXT NOT NULL,
				content TEXT NOT NULL,
				author TEXT NOT NULL,
				slug TEXT NOT NULL UNIQUE,
				publishedDate TEXT NOT NULL,
				editedDate TEXT
			)
		`,
		(err) => {
			if (err) {
				console.error(err.message);
				return err;
			}
		}
	);

	/* List all tables in the database */
	db.all(
		`
			SELECT name
			FROM sqlite_master
			WHERE type='table'
		`,
		(err, table) => {
			if (err) {
				console.error(err.message);
				return err;
			}
			table.forEach((table) => console.log(table.name));
		}
	);

	/* List out data in entry table */
	db.all(
		`
			SELECT * FROM entry
		`,
		(err, entry) => {
			if (err) {
				console.error(err.message);
				return err;
			}
			console.log(entry);
		}
	);
});

/* Close connection to the database */
/* db.close((err) => {
	if (err) {
		console.error(err.message);
		return err;
	}
	console.log(`Closed the database connection.`);
}); */

/* Exports */
module.exports = db;

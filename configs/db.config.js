/* Imports */
const path = require("path");
const sqlite = require("sqlite3").verbose();
require("dotenv").config();

/* Path to database */
const DB_PATH =
	process.env.DB_PATH || path.resolve(__dirname, "..", "db", "guestbook.db");

/* Open database connection */
const db = new sqlite.Database(DB_PATH, sqlite.OPEN_READWRITE, (err) => {
	if (err) console.error(err.message);
	console.log(`Connected to ${DB_PATH} database.`);

	/* Enable foreign keys */
	db.exec("PRAGMA foreign_keys = ON;", (err) => {
		if (err) console.warn("Pragma statement didn't work");
		console.log("Foreign key enforcement is on.");
	});
});

/* Run queries in series */
db.serialize(() => {
	/* List all tables in the database */
	db.all(
		"SELECT name FROM sqlite_master WHERE type='table'",
		(err, table) => {
			if (err) console.error(err.message);
			table.forEach((table) => console.log(table.name));
		}
	);

	/* List out data in entry table */
	db.all("SELECT * FROM entry", (err, entry) => {
		if (err) console.error(err.message);
		console.log(entry);
	});
});

/* Close connection to the database */
/* db.close((err) => {
	if (err) console.error(err.message);
	console.log(`Closed the database connection.`);
}); */

/* Exports */
module.exports = db;

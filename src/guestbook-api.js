/* Imports */
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

/* API URI */
const BASE_URI = "http://localhost:3030/api/v1";

/* Get the entries of the Guestbook */
const getGuestbookEntries = async () => {
	try {
		const response = await axios.get(`${BASE_URI}/entries/newest`);
		const data = await response.data;
		return data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

/* Get an entry from the Guestbook */
const getGuestbookEntry = async (slug) => {
	try {
		const response = await axios.get(`${BASE_URI}/entry/${slug}`);
		const data = await response.data;
		return data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

/* Exports */
export { getGuestbookEntries as entriesData, getGuestbookEntry as entryData };

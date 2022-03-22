# Guestbook

A simple Express API for logging entries in a guestbook. The guestbook is updated using REST API. Data is stored in a SQLite3 disk database.

## Routes

The route of each entry is slugified using the [slug](https://www.npmjs.com/package/slug) NPM package.

| Route                | HTTP Method | Description                            | Router            | Path                  |
| -------------------- | ----------- | -------------------------------------- | ----------------- | --------------------- |
| `api/v1`             | GET         | Shows all entries in the guestbook.    | `guestbookRouter` | `routes/guestbook.js` |
| `api/v1/entry/:slug` | GET         | Shows a single entry in the guestbook. | `entryRouter`     | `routes/entry.js`     |
| `api/v1/entry`       | POST        | Creates a new post.                    | `entryRouter`     | `routes/entry.js`     |
| `api/v1/entry/:slug` | POST        | Updates the content of an entry.       | `entryRouter`     | `routes/entry.js`     |
| `api/v1/entry/:slug` | DELETE      | Deletes an entry.                      | `entryRouter`     | `routes/entry.js`     |

## Controllers

An entry is modified through the use of controllers.

| Controller     | Description                                                                                                         | Path                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `create-entry` | Check the properties of the request body, if they are valid add the entry to an array of entries.                   | `controllers/create-entry.js` |
| `edit-entry`   | Check the slug of the entry to be edited, if an entry with the corresponding slug is found then update the content. | `controllers/edit-entry.js`   |
| `remove-entry` | Check the slug of the entry to be deleted, if an entry with the corresponding slug is found then remove the entry.  | `controllers/remove-entry.js` |

## HTTP Requests

A list of HTTP requests to the Guestbook API can be found in the `requests.rest` file located in the `http` folder. To run these requests install the [Rest Client extension in Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Todo

### Features

-   Registration and login for users.
-   Commenting section under each entry.
-   React buttons for each entry.

### Development

-   Add database to store entries and information about users.
-   Use a models for entry data, users, comments.
-   Authentication and authorization for registered users.
-   Frontend using a JavaScript library.

---

P. Richárd Szilágyi, 2022

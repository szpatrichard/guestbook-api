const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const apiRouter = require("./api-router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

/* API Version 1 */
app.use("/api", apiRouter);

app.get("/", (req, res) => {
	res.redirect("/api");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;

const express = require("express");
const cors = require("cors");

const feedbackRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/feedbacks", feedbackRouter);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    let error = { ...err };
    error.message = err.message;

    res.status(err.statusCode).json({ message: err.message });
});

module.exports = app;

const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
    {
        text: String,
        rating: Number,
        author: String,
    },
    { timestamps: true }
);

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;

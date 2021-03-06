const express = require("express");
const feedbackController = require("./controller");

const router = express.Router();

router
    .route("/")
    .get(feedbackController.getAllFeedbacks)
    .post(feedbackController.createFeedback);

router
    .route("/:id")
    .get(feedbackController.getFeedback)
    .put(feedbackController.updateFeedback)
    .delete(feedbackController.deleteFeedback);

module.exports = router;

const Feedback = require("./model");
const catchAsync = require("./utils");

module.exports = {
    getAllFeedbacks: catchAsync(async (req, res, next) => {
        const comments = await Feedback.find();

        res.status(200).json(comments);
    }),
    getFeedback: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const comment = await Feedback.findById(id);
        res.status(200).json(comment);
    }),
    createFeedback: catchAsync(async (req, res, next) => {
        const comment = await Feedback.create(req.body);
        res.status(201).json(comment);
    }),
    updateFeedback: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const comment = await Feedback.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(comment);
    }),

    deleteFeedback: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        await Feedback.findByIdAndDelete(id);
        res.status(204).json(null);
    }),
};

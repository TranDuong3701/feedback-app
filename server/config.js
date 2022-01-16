const mongoose = require("mongoose");

exports.connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost/feedbacks", {
            useNewUrlParser: true,
        });
        console.log("Connect db successfully!");
    } catch (error) {
        console.log(error.msg);
    }
};

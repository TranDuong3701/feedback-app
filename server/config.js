const mongoose = require("mongoose");

exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log("Connect db successfully!");
    } catch (error) {
        console.log(error.msg);
    }
};

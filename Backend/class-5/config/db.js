const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL)
        console.log("MongoDB connection success");
    }
    catch(error) {
        console.log("Error in connection", error);
    }
}

module.exports = connectDB
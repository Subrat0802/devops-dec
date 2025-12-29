const mongoose = require("mongoose");
require("dotenv").config;


exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("db connected")
    }).catch((error) => {
        console.log("Error while connecting to db");
        process.exit(1);
    });
}
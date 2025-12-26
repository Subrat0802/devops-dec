const mongoose = require("mongoose");

exports.dbConnect = () => {
    mongoose.connect("mongodb://mongo:27017/dockertwo").then(() => {
        console.log("db connected")
    }).catch((error) => {
        console.log("Error while connecting to db");
        process.exit(1);
    });
}
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type:String,
        require: true
    }
})

const User = mongoose.model("UserSchema", UserSchema);
module.exports = User;
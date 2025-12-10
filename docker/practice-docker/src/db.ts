import mongoose from "mongoose";

mongoose.connect("mongodb://dockermongoose:27017/dbdocker");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

const User = mongoose.model("User", UserSchema);
export default User;
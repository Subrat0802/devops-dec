const express = require("express");
const { dbConnect } = require("./utils/db");
const User = require("./models/user");

const app = express();
app.use(express.json());
dbConnect();

app.post("/signup", async (req, res) => {
    try{
        const {username, email, password} = req.body;
        console.log(username, password, email);
        if(!username || !email || !password){
            return res.status(400).json({
                message:"All fields are required",
                success:false
            })
        }

        const response = await User.create({
            username,
            email,
            password
        });

        if(!response){
            return res.status(400).json({
                message:"Error while creating user",
                success:false
            })
        }

        return res.status(200).json({
            message:"Signup successfully",
            success:true,
            user: response
        })


    }catch(error){
        return res.status(400).json({
                message:"server Error while creating user",
                success:false,
                error: error.message
            })
    }
})


app.listen(3000, () => {
    console.log("App is running at port 3000");
})


//docker compose up build
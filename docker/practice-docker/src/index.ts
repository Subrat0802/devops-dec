import express from "express";
import User from "./db.js";


const app = express();
app.use(express.json());

app.get("/", async (req, res) => {

    const response = await User.find();

    res.status(200).json({
        response:response
    })
})

app.post("/signup", async (req, res) => {
    try{
        const {email, name, password} = req.body;
        const response = await User.create({
            name:name,
            email:email,
            password:password
        })

        if(!response){
            return res.status(400).json({
                message:"Erro while signup",
                success:false
            })
        }


        return res.status(200).json({
            message:"User signup successfully",
            success:true
        })
    }catch(e){
        return res.status(500).json({
            message:"Server error",
            success:false
        })
    }
})


app.post("/signin", async (req, res) => {
    try{
        const {email, password} = req.body;
        const response = await User.findOne({email:email});
        if(!response){
            return res.status(400).json({
                message:"No user find, signup first",
                success:false
            })
        }
        return res.status(200).json({
            message:"Sigmn in successful",
            success:true
        })
    }catch(e) {
        return res.status(500).json({
            message:"Server error",
            success:false
        })
    }
})

app.listen(3000);
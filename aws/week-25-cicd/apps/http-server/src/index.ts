import {prismaClient} from "@repo/prisma/client"
import express from "express";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const {username, password} = req.body;

    const response = await prismaClient.user.create({
        data:{
            username: username,
            password: password
        }
    });

    return res.status(200).json({
        message:"user signup successfully",
        data: response

    })
})


app.get("/users", async (req, res) => {
    const response = await prismaClient.user.findMany();
    res.send({
        message:"all users",
        response: response
    })
})


app.listen(3001, () => {
    console.log("app is running at port 3001")
});

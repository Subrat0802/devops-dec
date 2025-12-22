import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const prismaClient = new PrismaClient();

app.post("/", async (req, res) => {
    const {username, password} = req.body;
    const resposne = await prismaClient.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.json({
        data: resposne,
        message:"post endpoint"
    })
})

app.get("/", async (req, res) => {
    const resposne = await prismaClient.user.findMany();

    res.json({
        allUsers: resposne,
        message:"get endpoint"
    })
})


app.listen(3000);
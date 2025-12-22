import express from "express";
import { prismaClient } from "@repo/db/client";
const app = express();
app.use(express.json());
app.post("/", async (req, res) => {
    const response = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    res.json({
        message: "Hi",
        response
    });
});
app.get("/", async (req, res) => {
    const response = await prismaClient.user.findMany();
    res.send({
        message: "Hello",
        response
    });
});
app.listen(3001);

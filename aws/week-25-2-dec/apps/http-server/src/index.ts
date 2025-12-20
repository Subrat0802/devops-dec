import express from "express";
import {prismaClient} from "@repo/db";

const app = express();
app.use(express.json());

app.post("/signin", async (req, res) => {
    try {
        const response = await prismaClient.user.create({
            data:{
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })

        return res.status(200).json({
            message:"user signin",
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            message:"Error while signin",
            error: error instanceof Error ? error.message : "Unknown error"
        })
    }
})

app.get("/users", async (req, res) => {
    try {
        const response = await prismaClient.user.findMany();
        
        return res.status(200).json({
            message:"users retrieved successfully",
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            message:"Error while fetching users",
            error: error instanceof Error ? error.message : "Unknown error"
        })
    }
})

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
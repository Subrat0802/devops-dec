const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(3000);

console.log(process.env.DATABASE, "vewvewfewfewfefewfcdrvrwvr");
console.log(process.env.DATA);
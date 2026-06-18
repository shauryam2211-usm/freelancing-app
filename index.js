require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Freelancing API Running");
});

connectDB();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
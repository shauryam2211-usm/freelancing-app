require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");
const createUser = require("./src/test");
const authRoutes = require("./src/routes/auth.routes");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Freelancing API Running");
});

connectDB();
createUser();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const projectRoutes = require("./src/routes/project.routes");
const bidRoutes =
require("./src/routes/bid.routes");
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bids", bidRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
    res.send("Freelancing API Running");
});

async function startServer() {
    await connectDB();

    app.listen(process.env.PORT, () => {
        console.log(
            `Server running on port ${process.env.PORT}`
        );
    });
}

startServer();
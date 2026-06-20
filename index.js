require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const projectRoutes = require("./src/routes/project.routes");
const bidRoutes = require("./src/routes/bid.routes");
const contractRoutes = require("./src/routes/contract.routes");
const submissionRoutes = require("./src/routes/submission.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// Mount all nested routes under /api
app.use("/api", bidRoutes);
app.use("/api", contractRoutes);
app.use("/api", submissionRoutes);

app.get("/", (req, res) => {
    res.send("Freelancing API Running");
});

async function startServer() {
    try {
        await connectDB();

        app.listen(process.env.PORT || 3000, () => {
            console.log(
                `Server running on port ${process.env.PORT || 3000}`
            );
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startServer();
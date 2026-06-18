const mongoose = require("mongoose");

async function connectDB() {
    try {
        console.log("Mongo URL:", process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Database Connected");
    } catch (error) {
        console.log("Connection failed:", error.message);
    }
}

module.exports = connectDB;
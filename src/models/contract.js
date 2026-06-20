const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema(
    {
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        freelancerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        bidId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bid",
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: [
                "active",
                "completed",
                "cancelled"
            ],
            default: "active"
        }
    },
    {
        timestamps: true
    }
);

module.exports =
mongoose.model(
    "Contract",
    contractSchema
);
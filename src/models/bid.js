const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },

    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    proposedAmount: {
      type: Number,
      required: true
    },

    coverLetter: {
      type: String,
      required: true
    },

    deliveryDays: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "withdrawn"],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Bid", bidSchema);
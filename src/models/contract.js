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

    agreedAmount: {
      type: Number,
      required: true
    },

    deadline: {
      type: Date,
      required: true
    },

    status: {
      type: String,
      enum: [
        "active",
        "submitted",
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

module.exports = mongoose.model("Contract", contractSchema);
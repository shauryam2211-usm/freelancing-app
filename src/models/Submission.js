const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    contractId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contract",
      required: true
    },

    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    description: {
      type: String,
      required: true
    },

    attachmentUrl: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "revision_requested"
      ],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Submission",
  submissionSchema
);
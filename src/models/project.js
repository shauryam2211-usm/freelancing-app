const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    budget: {
      type: Number,
      required: true
    },

    deadline: {
      type: Date,
      required: true
    },

    skills: [{
      type: String
    }],

    category: {
      type: String,
      required: true
    },

    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    status: {
      type: String,
      enum: [
        "open",
        "in_progress",
        "completed",
        "cancelled"
      ],
      default: "open"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
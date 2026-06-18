const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    balance: {
      type: Number,
      default: 0
    },

    escrowBalance: {
      type: Number,
      default: 0
    },

    transactions: [
      {
        type: {
          type: String
        },

        amount: {
          type: Number
        },

        description: {
          type: String
        },

        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Wallet", walletSchema);
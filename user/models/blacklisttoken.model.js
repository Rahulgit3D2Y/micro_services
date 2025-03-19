const mongoose = require("mongoose");

const blackListTokemSchema = new mongoose.Schema(
  {
    toekn: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 3600,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("blacklisttoken", blackListTokemSchema);

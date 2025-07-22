// server/models/Scan.js
const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  location: {
    country: String,
    region: String,
    city: String,
  },
  timeSpent: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Scan", scanSchema);

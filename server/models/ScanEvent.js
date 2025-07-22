const mongoose = require('mongoose');

const ScanEventSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    default: 'Unknown',
  },
  userAgent: {
    type: String,
    default: 'Unknown',
  },
});

module.exports = mongoose.model('ScanEvent', ScanEventSchema);

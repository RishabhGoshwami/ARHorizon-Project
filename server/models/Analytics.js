import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  userAgent: String,
  location: String,
  ip: String,
  startTime: { type: Date, required: true },
  endTime: Date,
  duration: Number, // in seconds
});

export default mongoose.model("Analytics", AnalyticsSchema);

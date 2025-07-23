// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Analytics from "./models/Analytics.js";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Route to log scan start
app.post("/api/scan", async (req, res) => {
  const { userAgent, location, ip } = req.body;
  const sessionId = uuidv4();

  const scan = new Analytics({
    sessionId,
    userAgent,
    location,
    ip,
    startTime: new Date(),
  });

  await scan.save();
  res.status(201).json({ message: "Scan logged", sessionId });
});

// Route to update session with end time
app.post("/api/scan/end", async (req, res) => {
  const { sessionId } = req.body;
  const scan = await Analytics.findOne({ sessionId });

  if (scan && !scan.endTime) {
    scan.endTime = new Date();
    scan.duration = (scan.endTime - scan.startTime) / 1000; // in seconds
    await scan.save();
  }

  res.status(200).json({ message: "Session ended" });
});

// Analytics API
app.get("/api/analytics", async (req, res) => {
  const totalScans = await Analytics.countDocuments();
  const uniqueUsers = await Analytics.distinct("ip");
  const allDurations = await Analytics.find({ duration: { $exists: true } }, "duration");

  const avgTime =
    allDurations.reduce((sum, d) => sum + d.duration, 0) /
    (allDurations.length || 1);

  res.json({
    totalScans,
    uniqueUsers: uniqueUsers.length,
    averageTimeSpent: avgTime.toFixed(2),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

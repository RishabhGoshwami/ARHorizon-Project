import express from "express";
import Scan from "../models/Scan.js";

const router = express.Router();

// POST /api/scan — Logs scan start
router.post("/", async (req, res) => {
  try {
    const { userAgent, location } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // Create scan with no timeSpent initially
    const newScan = new Scan({ userAgent, location, ip });
    await newScan.save();

    res.status(201).json({ message: "Scan started", id: newScan._id });
  } catch (error) {
    console.error("Scan start error:", error);
    res.status(500).json({ error: "Failed to log scan" });
  }
});

// POST /api/scan/end — Updates scan with timeSpent
router.post("/end", async (req, res) => {
  try {
    const { id, timeSpent } = req.body;

    if (!id || !timeSpent) {
      return res.status(400).json({ error: "id and timeSpent required" });
    }

    await Scan.findByIdAndUpdate(id, { timeSpent });

    res.status(200).json({ message: "Scan updated with timeSpent" });
  } catch (error) {
    console.error("Scan end error:", error);
    res.status(500).json({ error: "Failed to update scan" });
  }
});

export default router;

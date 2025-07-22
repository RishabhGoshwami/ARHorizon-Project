// server/controllers/analyticsController.js
const Scan = require("../models/Scan");
const geoip = require("geoip-lite");

exports.recordScan = async (req, res) => {
  try {
    const ip = req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.useragent.source;
    const geo = geoip.lookup(ip) || {};

    const newScan = new Scan({
      ip,
      userAgent,
      location: {
        country: geo.country || "Unknown",
        region: geo.region || "Unknown",
        city: geo.city || "Unknown",
      },
      timeSpent: req.body.timeSpent || 0,
    });

    await newScan.save();
    res.status(201).json({ message: "Scan recorded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to record scan" });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const scans = await Scan.find();
    const totalScans = scans.length;
    const uniqueUsers = new Set(scans.map((scan) => scan.ip)).size;
    const avgTime =
      scans.reduce((acc, curr) => acc + (curr.timeSpent || 0), 0) / (totalScans || 1);

    res.json({
      totalScans,
      uniqueUsers,
      averageTimeSpent: avgTime.toFixed(2),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
};

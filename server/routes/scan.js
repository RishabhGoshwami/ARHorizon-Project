const express = require('express');
const router = express.Router();
const ScanEvent = require('../models/ScanEvent');
const geoip = require('geoip-lite');
const useragent = require('express-useragent');

// Middleware to extract user-agent
router.use(useragent.express());

// 🔄 Route to log a scan event
router.post('/log', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const geo = geoip.lookup(ip);
    const location = geo ? `${geo.city}, ${geo.country}` : 'Unknown';
    const userAgent = req.useragent.source;

    const newScan = new ScanEvent({
      location,
      userAgent,
    });

    await newScan.save();
    res.status(200).json({ success: true, message: 'Scan event logged' });
  } catch (error) {
    console.error('Error logging scan:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// 📊 Route to fetch analytics
router.get('/analytics', async (req, res) => {
  try {
    const totalScans = await ScanEvent.countDocuments();
    const uniqueUserAgents = await ScanEvent.distinct('userAgent');
    const avgTime = 12; // ⏱️ Dummy data: e.g. average 12 seconds

    res.json({
      totalScans,
      uniqueUsers: uniqueUserAgents.length,
      avgTimeSpent: avgTime,
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

module.exports = router;

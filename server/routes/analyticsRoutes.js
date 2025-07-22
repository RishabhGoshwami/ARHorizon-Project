// server/routes/analyticsRoutes.js
const express = require("express");
const router = express.Router();
const useragent = require("express-useragent");

const {
  recordScan,
  getAnalytics,
} = require("../controllers/analyticsController");

router.use(useragent.express());

router.post("/scan", recordScan);
router.get("/analytics", getAnalytics);

module.exports = router;

// AnalyticsSection.jsx
import React, { useEffect, useState } from "react";

const AnalyticsSection = () => {
  const [analytics, setAnalytics] = useState({ totalScans: 0, uniqueUsers: 0 });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch("https://arhorizon-project1.onrender.com/api/analytics");
        const data = await res.json();
        setAnalytics(data);
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <section className="bg-gray-100 py-6 px-4 rounded-xl mt-8 text-center">
      <h3 className="text-xl font-bold mb-2">📊 Campaign Analytics</h3>
      <p>🔁 Total Scans: <strong>{analytics.totalScans}</strong></p>
      <p>👥 Unique Users: <strong>{analytics.uniqueUsers}</strong></p>
      <p>⏱️ Avg Time Spent: <strong>7.3 sec</strong> (dummy)</p>
    </section>
  );
};

export default AnalyticsSection;

import React, { useEffect, useState } from "react";

const ARViewer = () => {
  const [analytics, setAnalytics] = useState({
    totalScans: 0,
    uniqueUsers: 0,
    averageTimeSpent: 0,
  });

  // 1. Log scan on load
  useEffect(() => {
    fetch("http://localhost:5000/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        location: window.location.href,
        timestamp: new Date().toISOString(),
      }),
    });

    // 2. Fetch analytics
    const getAnalytics = async () => {
      try {
        const res = await fetch("https://arhorizon-project1.onrender.com/api/analytics");
        const data = await res.json();
        setAnalytics(data);
      } catch (err) {
        console.error("Analytics fetch failed", err);
      }
    };

    getAnalytics();
  }, []);

  // 3. Handle CTA click
  const handleCTAClick = () => {
    fetch("https://arhorizon-project1.onrender.com/api/scan/end", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        location: window.location.href,
        timestamp: new Date().toISOString(),
      }),
    });
  };

  return (
    <div className="text-center py-10">
      <iframe
        src="https://threejs.org/examples/#webgl_animation_skinning_morph"
        title="AR Simulation"
        className="w-full md:w-[600px] h-[400px] mb-6 border-2 border-white rounded-xl"
      />

      <button
        onClick={handleCTAClick}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
      >
        Buy Now
      </button>

      {/* 4. Analytics Section */}
      <div className="mt-6 text-white bg-gray-900 p-4 rounded-lg shadow-lg w-full md:w-[600px] mx-auto">
        <h3 className="text-xl font-bold mb-2">Campaign Analytics</h3>
        <p><strong>Total Scans:</strong> {analytics.totalScans}</p>
        <p><strong>Unique Users:</strong> {analytics.uniqueUsers}</p>
        <p><strong>Average Time Spent:</strong> {analytics.averageTimeSpent.toFixed(2)} seconds</p>
      </div>
    </div>
  );
};

export default ARViewer;

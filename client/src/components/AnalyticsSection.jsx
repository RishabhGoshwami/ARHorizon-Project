import { useEffect, useState } from "react";

const AnalyticsSection = () => {
  const [data, setData] = useState({
    totalScans: 0,
    averageTime: "0s",
    uniqueUsers: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics")
      .then((res) => res.json())
      .then((resData) => {
        setData({
          totalScans: resData.totalScans,
          averageTime: resData.avgTimeSpent || "N/A",
          uniqueUsers: resData.uniqueUsers,
        });
      })
      .catch((err) => console.error("Error fetching analytics:", err));
  }, []);

  return (
    <div className="p-4 text-center bg-white shadow-md rounded-lg mt-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">📊 Campaign Analytics</h2>
      <p>Total Scans: {data.totalScans}</p>
      <p>Unique Users: {data.uniqueUsers}</p>
      <p>Avg. Time Spent: {data.averageTime}</p>
    </div>
  );
};

export default AnalyticsSection;

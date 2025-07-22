// QRCodeSection.jsx
import React, { useEffect } from "react";

const QRCodeSection = () => {
  useEffect(() => {
    // Simulate QR scan on component mount
    const logScan = async () => {
      try {
        await fetch("https://arhorizon-project1.onrender.com/api/scan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            location: window.location.href,
          }),
        });
      } catch (err) {
        console.error("Scan logging failed", err);
      }
    };

    logScan();
  }, []);

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-4">Scan the QR Code</h2>
      <img
        src="/qr-placeholder.png"
        alt="QR Code"
        className="mx-auto w-48 h-48 mb-4"
      />
      <p>Use your phone camera or QR scanner to scan.</p>
    </section>
  );
};

export default QRCodeSection;

// QRCodeSection.jsx
import React, { useEffect } from "react";

const QRCodeSection = () => {
  useEffect(() => {
    document.title = "Experience Print Come to Life";

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
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Experience Print <br /> Come to Life
        </h2>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Farhorizon-project.onrender.com%2F%23%2Far&size=200x200"
          alt="QR Code"
          className="mx-auto w-48 h-48 rounded-md border-4 border-blue-500 transition-transform duration-300 hover:scale-105"
        />
        <p className="mt-4 text-gray-600">
          Use your phone camera or QR scanner to access the AR experience.
        </p>
      </div>
    </section>
  );
};

export default QRCodeSection;

const QRCodeSection = () => {
  return (
    <div className="text-center mt-8">
      <h3 className="text-xl font-semibold mb-4">📸 Scan the QR Code Below</h3>
      <img src="/qrcode.png" alt="QR Code" className="mx-auto w-44" />
      <p className="mt-3 text-gray-600">Scan using your phone to explore AR content.</p>
    </div>
  );
};

export default QRCodeSection;

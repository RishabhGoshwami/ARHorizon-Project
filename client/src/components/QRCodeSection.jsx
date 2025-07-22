import QRCode from 'react-qr-code';

const QRCodeSection = () => {
  const qrValue = `${window.location.origin}/ar`;

  return (
    <div className="flex flex-col items-center mb-8">
      <p className="mb-2 text-lg text-gray-700">Scan the QR Code below:</p>
      <div className="bg-white p-4 rounded shadow-md">
        <QRCode value={qrValue} size={160} />
      </div>
    </div>
  );
};

export default QRCodeSection;

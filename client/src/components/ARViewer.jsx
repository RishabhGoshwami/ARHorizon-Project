const ARViewer = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <iframe
        title="AR Content"
        src="https://example-ar-simulation.com" // Replace with real AR content or Three.js demo
        className="w-[90%] h-[80%] border-2 border-white rounded-xl"
        allowFullScreen
      />
    </div>
  );
};

export default ARViewer;

const ARViewer = () => {
  // Optional: Fetch backend scan log on load
  useEffect(() => {
    fetch("https://your-backend-url/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timeSpent: 45 }) // dummy value
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Welcome to Your AR Experience</h2>

      <iframe
        src="https://threejs.org/examples/#webgl_animation_skinning_blending"
        className="w-[340px] h-[250px] border rounded-lg shadow-lg"
        title="AR Simulation"
      />

      <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Buy Now
      </button>
    </div>
  );
};

export default ARViewer;

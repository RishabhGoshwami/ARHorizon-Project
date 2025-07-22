const ARViewer = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <iframe
        src="https://threejs.org/examples/#webgl_animation_skinning_morph"
        title="AR Simulation"
        className="w-full md:w-[600px] h-[400px] mb-6 border-2 border-white rounded-xl"
      />
    </div>
  );
};

export default ARViewer;

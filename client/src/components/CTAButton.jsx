const CTAButton = () => {
  const handleClick = () => {
    window.open('https://your-product-page.com', '_blank');
  };

  return (
    <div className="text-center mb-6">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default CTAButton;

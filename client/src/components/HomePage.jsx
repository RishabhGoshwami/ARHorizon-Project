import Header from './Header';
import QRCodeSection from './QRCodeSection';

import AnalyticsSection from './AnalyticsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <QRCodeSection />
      
      <AnalyticsSection />
    </div>
  );
};

export default HomePage;

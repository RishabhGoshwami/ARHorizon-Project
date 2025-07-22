import Header from './Header';
import QRCodeSection from './QRCodeSection';
import CTAButton from './CTAButton';
import AnalyticsSection from './AnalyticsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <QRCodeSection />
      <CTAButton />
      <AnalyticsSection />
    </div>
  );
};

export default HomePage;

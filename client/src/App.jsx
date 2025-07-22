import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ARViewer from './components/ARViewer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ar" element={<ARViewer />} />
    </Routes>
  );
};

export default App;

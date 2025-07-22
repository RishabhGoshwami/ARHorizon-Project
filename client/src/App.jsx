// ❌ Wrong
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import QRCodeSection from "./components/QRCodeSection";
import ARViewer from "./components/ARViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeSection />} />
        <Route path="/ar" element={<ARViewer />} />
      </Routes>
    </Router>
  );
}

export default App;

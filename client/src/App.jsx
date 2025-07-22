import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeSection from "./components/QRCodeSection";
import ARViewer from "./components/ARViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRCodeSection />} />
        <Route path="/ar" element={<ARViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

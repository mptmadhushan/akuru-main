import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Write from './Pages/client/write/page';
import Capture from './Pages/client/capture/Capture';
import Home2 from './Pages/client/page';
import LevelSelecterScreen from './Pages/LevelSelecterScreen';
import UploadedImagesScreen from './Pages/UploadedImagesScreen';
import ResultPage from './Pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home2 />} />

      <Route path="/write" element={<Write />} />
      <Route path="/capture" element={<Capture />} />
      <Route path="/level" element={<LevelSelecterScreen />} />
      <Route path="/upload/:type" element={<UploadedImagesScreen />} />
      <Route path="/result/:type" element={<ResultPage />} />
         </Routes>
  </BrowserRouter>
  );
}

export default App;

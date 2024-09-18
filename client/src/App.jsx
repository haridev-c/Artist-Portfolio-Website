import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CustomWorks from "./pages/CustomWorks";
import Caricature from "./pages/Caricature";
import ColorPortrait from "./pages/ColorPortrait";
import PencilPortrait from "./pages/PencilPortrait";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:5050";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-works" element={<CustomWorks />} />
        <Route path="/caricature" element={<Caricature />} />
        <Route path="/color-portrait" element={<ColorPortrait />} />
        <Route path="/pencil-portrait" element={<PencilPortrait />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;

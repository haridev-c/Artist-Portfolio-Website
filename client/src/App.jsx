import { Route, Routes } from "react-router-dom";
import axios from "axios";

// shadcn imports
import { Toaster } from "@/components/ui/toaster";

// page imports
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CustomWorksPage from "./pages/CustomWorksPage";
import CaricaturePage from "./pages/CaricaturePage";
import ColorPortraitPage from "./pages/ColorPortraitPage";
import PencilPortraitPage from "./pages/PencilPortraitPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

function App() {
  // Set the base URL for axios
  axios.defaults.baseURL = "http://localhost:5050";
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/custom-works" element={<CustomWorksPage />} />
        <Route path="/caricature" element={<CaricaturePage />} />
        <Route path="/color-portrait" element={<ColorPortraitPage />} />
        <Route path="/pencil-portrait" element={<PencilPortraitPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

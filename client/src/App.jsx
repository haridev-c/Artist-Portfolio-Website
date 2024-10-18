import { Route, Routes } from "react-router-dom";
import axios from "axios";

// shadcn imports
import { Toaster } from "@/components/ui/toaster";

// page imports
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryArtsPage from "./pages/CategoryArtsPage";

function App() {
  // Set the base URL for axios
  axios.defaults.baseURL = "http://localhost:5050";
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/category/:category" element={<CategoryArtsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import HeaderSection from "../components/HeaderSection";

function ColorPortraitPage() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/get-all-products");
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Color Portrait"),
      );
      if (data.filter((product) => product.category === "Color Portrait")) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <HeaderSection service="Color Portraits" products={reqProducts} />
      <ServiceSection service="Color Portrait" products={reqProducts} />
      <Footer />
    </>
  );
}

export default ColorPortraitPage;

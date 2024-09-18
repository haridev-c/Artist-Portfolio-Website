import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import ServiceSection from "../components/ServiceSection";

function CustomWorksPage() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/get-all-products");
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Custom Works"),
      );
      if (data.filter((product) => product.category === "Custom Works")) {
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
      <HeaderSection service="Custom Works" products={reqProducts} />
      <ServiceSection service="Custom Work" products={reqProducts} />
      <Footer />
    </>
  );
}

export default CustomWorksPage;

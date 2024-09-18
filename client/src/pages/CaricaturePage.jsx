import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import HeaderSection from "../components/HeaderSection";

function CaricaturePage() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/get-all-products");
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Caricature"),
      );
      if (data.filter((product) => product.category === "Caricature")) {
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
      <HeaderSection service="Caricature" products={reqProducts} />
      <ServiceSection service="Caricature" products={reqProducts} />
      <Footer />
    </>
  );
}

export default CaricaturePage;

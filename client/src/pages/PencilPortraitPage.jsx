import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import ServiceSection from "../components/ServiceSection";

function PencilPortraitPage() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/get-all-products");
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Pencil Portrait"),
      );
      if (data.filter((product) => product.category === "Pencil Portrait")) {
        setLoading(false);
      }
      console.log(
        data.filter((product) => product.category === "Pencil Portrait"),
        "req products",
      );
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <HeaderSection service="Pencil Portraits" products={reqProducts} />
      <ServiceSection service="Pencil Portrait" products={reqProducts} />
      <Footer />
    </>
  );
}

export default PencilPortraitPage;

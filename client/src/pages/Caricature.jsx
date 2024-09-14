import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";

function Caricature() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/get-all-products");
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Caricature")
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
      <Header service="Caricature" products={reqProducts} />
      <Service service="Caricature" products={reqProducts} />
      <Footer />
    </>
  );
}

export default Caricature;
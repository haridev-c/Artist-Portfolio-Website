import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";

function CustomWorks() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/get-all-products");
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Custom Works")
      );
      if (data.filter((product) => product.category === "Custom Works")) {
        setLoading(false);
      }
      console.log(reqProducts, "req products");
    }
    fetchData();
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header service="Custom Works" products={reqProducts} />
      <Service service="Custom Work" products={reqProducts} />
      <Footer />
    </>
  );
}

export default CustomWorks;

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";

function ColorPortrait() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:5050/api/products/get-all-products"
      );
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Color Portrait")
      );
      if (data.filter((product) => product.category === "Color Portrait")) {
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
      <Header service="Color Portraits" products={reqProducts} />
      <Service service="Color Portrait" products={reqProducts} />
      <Footer />
    </>
  );
}

export default ColorPortrait;

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";

function PencilPortrait() {
  const [reqProducts, setReqProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:5050/api/products/get-all-products"
      );
      console.log(data, "all products");
      setReqProducts(
        data.filter((product) => product.category === "Pencil Portrait")
      );
      if (data.filter((product) => product.category === "Pencil Portrait")) {
        setLoading(false);
      }
      console.log(
        data.filter((product) => product.category === "Pencil Portrait"),
        "req products"
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
      <Header service="Pencil Portraits" products={reqProducts} />
      <Service service="Pencil Portrait" products={reqProducts} />
      <Footer />
    </>
  );
}

export default PencilPortrait;

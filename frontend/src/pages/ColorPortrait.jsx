import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";

function ColorPortrait() {
  const [allProducts, setAllProducts] = useState([]);
  const [reqProducts, setReqProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:5050/api/products/get-all-products"
      );
      await console.log(data, "all products");
      await setAllProducts(data);
      await setReqProducts(
        allProducts.filter((product) => product.category === "Color Portrait")
      );
      await console.log(reqProducts, "req products");
    }
    fetchData();
  });

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

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";

function PencilPortrait() {
  const [allProducts, setAllProducts] = useState([]);
  const [reqProducts, setReqProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:5050/api/products/get-all-products"
      );
      console.log(data, "all products");
      setAllProducts(data);
      setReqProducts(
        data.filter((product) => product.category === "Pencil Portrait")
      );
      console.log(
        data.filter((product) => product.category === "Pencil Portrait"),
        "req products"
      );
    }
    fetchData();
  }, []); // don't forget the dependency array

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

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Test() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pdts = await axios.get(
        "http://localhost:5050/api/products/get-products"
      );
      console.log(pdts.data);
      setProducts(pdts.data);
    }
    fetchData();
  });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {products.map((item) => (
            <Card product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Test;

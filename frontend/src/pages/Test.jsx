import React, { useEffect } from "react";
import axios from "axios";

function Test() {
  useEffect(() => {
    async function fetchData() {
      const products = await axios.get(
        "http://localhost:5050/api/products/get-products"
      );
      console.log(products);
    }
    fetchData();
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Card Header</div>
              <div className="card-body">
                Card Body
                <img
                  src="http://localhost:5050/uploads/1713851761189WIN_20231104_21_38_59_Pro.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;

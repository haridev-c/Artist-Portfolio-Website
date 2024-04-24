import React from "react";
import Card from "./Card";

function Service(props) {
  return (
    <>
      <div className="container">
        <p class="text-primary text-uppercase mb-2 text-center">My Services</p>
        <h1 class="display-6 mb-4 text-center">{props.service}</h1>
        <div className="container">
          <div className="row justify-content-center">
            {props.products.map((product) => (
              <Card product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

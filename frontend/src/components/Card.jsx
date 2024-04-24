import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Card({ product }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card my-4">
          <img
            src={product.imageUrl}
            className="card-image-top img-fluid"
            alt=""
          />
          <div className="card-body">
            {product.component === "Custom Works" ? (
              <p className="card-text">{product.customWorks}</p>
            ) : (
              <div>
                <p className="card-text">Work Type: {product.workType}</p>
                <p className="card-text">Paper Size: {product.paperSize}</p>
              </div>
            )}
          </div>
          {product.category !== "Custom Works" && (
            <div className="card-footer">
              <MdOutlineCurrencyRupee /> {product.price}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;

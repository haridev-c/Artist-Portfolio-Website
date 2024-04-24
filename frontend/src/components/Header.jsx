import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  useEffect(() => {
    async function fetchImageUrl() {
      if (props.products && props.products.length >= 2) {
        const temp1 = props.products[0].imageUrl;
        setImg1(temp1);
        const temp2 = props.products[1].imageUrl;
        setImg2(temp2);
      }
    }

    fetchImageUrl();
  }, [props.products]); // dependency array

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">
                {props.service}
              </h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.service}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid bg-white p-3 w-100"
                    src={img1}
                    alt="Pencil Portrait 1"
                  />
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid bg-white p-3 w-100"
                    src={img2}
                    alt="Pencil Portrait 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header;
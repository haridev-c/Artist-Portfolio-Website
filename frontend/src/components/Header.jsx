import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  async function fetchImageUrl() {
    const temp1 = await props.products[0].imageUrl;
    await setImg1(temp1);
    const temp2 = await props.products[1].imageUrl;
    await setImg2(temp2);
  }

  fetchImageUrl();

  return (
    <>
      {/* <!-- Header Start --> */}
      <div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <h1 class="display-4 mb-3 animated slideInDown">
                {props.service}
              </h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <a href="#">Home</a>
                    </Link>
                  </li>
                  <li class="breadcrumb-item">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <a href="#">Home</a>
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {props.service}
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 animated fadeIn">
              <div class="row g-3">
                <div class="col-6 text-end">
                  <img
                    class="img-fluid bg-white p-3 w-100"
                    src={img1}
                    alt="Pencil Portrait 1"
                  />
                </div>
                <div class="col-6">
                  <img
                    class="img-fluid bg-white p-3 w-100"
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

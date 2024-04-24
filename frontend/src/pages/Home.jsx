import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        {/* <!-- Header Start --> */}
        <div className="container-fluid hero-header bg-light py-5 mb-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <p className="text-primary text-uppercase mb-2 animated slideInDown">
                  Welcome To Artful Alchemy
                </p>
                <h1 className="display-4 mb-3 animated slideInDown">
                  Art Studio Based in Kerala
                </h1>
                <p className="animated slideInDown">
                  Inspiring Beauty, One Artwork at a Time
                </p>
                <div className="d-flex align-items-center pt-4 animated slideInDown">
                  {/* <!--
                        <a href="" className="btn btn-primary py-3 px-4 me-5">Explore More</a>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                        --> */}
                </div>
              </div>
              <div className="col-lg-6 animated fadeIn">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid bg-white p-3 w-100 mb-3"
                      src="img/color-portrait/color-portrait-3.jpg"
                      alt=""
                    />
                    <img
                      className="img-fluid bg-white p-3 w-50"
                      src="img/color-portrait/color-portrait-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid bg-white p-3 w-50 mb-3"
                      src="img/color-portrait/color-portrait-1.jpg"
                      alt=""
                    />
                    <img
                      className="img-fluid bg-white p-3 w-100"
                      src="img/pencil-portraits/pencil-portrait-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header End --> */}
        <About />
        {/* <!-- Service Start --> */}
        <div className="container-xxl bg-light py-5 my-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="text-primary text-uppercase mb-2">My Services</p>
              <h1 className="display-6 mb-4">
                I Provide The Best Professional Artwork In The State
              </h1>
            </div>
            <div className="row g-3">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/pencil-portraits/pencil-portrait-1.jpg"
                      alt="A pencil portrait"
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/pencil-portrait.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <Link
                      to="/pencil-portrait"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Pencil Portraits</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/color-portrait/color-portrait-1.jpg"
                      alt=""
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/color-portrait.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <Link
                      to="/color-portrait"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Colour Portraits</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/caricature/single.jpg"
                      alt=""
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/caricature.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <Link to="/caricature" style={{ textDecoration: "none" }}>
                      <h4>Caricature</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/custom-works/fabric-painting.jpg"
                      alt=""
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/custom-works.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <Link to="/custom-works" style={{ textDecoration: "none" }}>
                      <h4>Customized Works</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Service Ends--> */}
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

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
        {/* <!-- Video Modal Start --> */}
        <div
          className="modal modal-video fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* <!-- 16:9 aspect ratio --> */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowFullScreen
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Video Modal End --> */}
        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-3 img-twice position-relative h-100">
                  <div className="col-6">
                    <img
                      className="img-fluid bg-light p-3"
                      src="img/about-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6 align-self-end">
                    <img
                      className="img-fluid bg-light p-3"
                      src="img/about-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                  <p className="text-primary text-uppercase mb-2">About Me</p>
                  <h1 className="display-6 mb-4">
                    I'm a Creative And Professional Artist
                  </h1>
                  <p>
                    In my cozy studio, I blend pigments and whispers of
                    inspiration. My art is a journey—a fusion of alchemy and
                    authenticity. With every canvas, I aim to evoke wonder,
                    provoke thought, and ignite joy. Thank you for joining me on
                    this artistic adventure. Let’s create magic, one artwork at
                    a time.
                  </p>
                  <p>
                    As an artist, I don’t merely paint; I breathe life into
                    visions. When you commission a piece, you’re not hiring a
                    mere artist—you’re gaining a collaborator who listens,
                    interprets, and infuses heart into every stroke. Whether
                    it’s a cherished portrait, a captivating landscape, or a
                    custom illustration, I immerse myself in your story. Your
                    satisfaction isn’t just my goal; it’s my masterpiece. Let’s
                    transform your ideas into timeless art together.
                  </p>
                  <div className="row g-2 mb-4">
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3"></i>Quality
                      Arts
                    </div>
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3"></i>Custom
                      Works
                    </div>
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3"></i>Online
                      Order
                    </div>
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3"></i>Home
                      Delivery
                    </div>
                  </div>
                  {/* <!--<a className="btn btn-primary py-3 px-5" href="">Read More</a>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}
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
                    <h4>Pencil Portraits</h4>
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
                    <h4>Colour Portraits</h4>
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
                    <h4>Caricature</h4>
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
                    <h4>Customized Works</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Service Ends--> */}
        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="text-primary text-uppercase mb-2">
                Client's Review
              </p>
              <h1 className="display-6 mb-0">
                More Than 500+ Customers Trusted Me
              </h1>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="testimonial-item bg-white p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/testimonial-1.jpg"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Ashwathy</h5>
                    <span>CEO</span>
                  </div>
                </div>
                <p className="mb-0">
                  “I commissioned a custom portrait, and the result left me
                  speechless. The artist’s attention to detail and emotional
                  depth transformed my vision into reality. Highly recommended!”
                </p>
              </div>
              <div className="testimonial-item bg-white p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/testimonial-2.jpg"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Abhinav</h5>
                    <span>Photographer</span>
                  </div>
                </div>
                <p className="mb-0">
                  “Artful Alchemy doesn’t just create art; they weave stories.
                  Each stroke carries meaning, and their landscapes transport
                  you. A true gem for art enthusiasts!”
                </p>
              </div>
              <div className="testimonial-item bg-white p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/testimonial-3.jpg"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Vijay</h5>
                    <span>Developer</span>
                  </div>
                </div>
                <p className="mb-0">
                  “From concept to canvas, Artful Alchemy listens. They captured
                  my pet’s soul in a portrait—every whisker, every twinkle. A
                  cherished keepsake forever.”
                </p>
              </div>
              <div className="testimonial-item bg-white p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/testimonial-4.jpg"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Revathy</h5>
                    <span>Teacher</span>
                  </div>
                </div>
                <p className="mb-0">
                  “Working with Artful Alchemy was like watching magic unfold.
                  Their passion radiates through their art. If you seek beauty,
                  look no further.”
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;

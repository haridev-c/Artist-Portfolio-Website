import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <>
      <div>
        home
        {/* <!-- Navbar Start --> */}
        <nav
          className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="text-primary">Artful Alchemy</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Services
              </a>
            </div>
            <a
              href="index.html"
              className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block"
            >
              <h1 className="text-white">Artful Alchemy</h1>
            </a>
            <div className="navbar-nav me-auto py-0">
              {/* <!--<a href="project.html" className="nav-item nav-link">Projects</a>--> */}
              {/* <!-- Pages dropdown Starts --> */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 shadow-sm border-0 m-0">
                  <a href="pencil-portrait.html" className="dropdown-item">
                    Pencil Portrait
                  </a>
                  <a href="color-portrait.html" className="dropdown-item">
                    Colour Portraits
                  </a>
                  <a href="caricature.html" className="dropdown-item">
                    Caricatures
                  </a>
                  <a href="custom-works.html" className="dropdown-item">
                    Custom Works
                  </a>
                </div>
              </div>
              {/* <!--Pages dropdown--> */}
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- Navbar End --> */}
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
        {/* <!-- Footer Start --> */}
        <div
          className="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="row g-5 py-5">
            <div className="col-lg-6 pe-lg-5">
              <a href="index.html" className="navbar-brand">
                <h1 className="display-5 text-primary">Artful Alchemy</h1>
              </a>
              <p>Inspiring Beauty, One Artwork at a Time.</p>
              <p>
                <IoLocationSharp />
                &nbsp; Thondayad, Kozhikode, Kerala
              </p>
              <p>
                <FaPhoneAlt />
                &nbsp; +91 12345 67890
              </p>
              <p>
                <MdEmail />
                &nbsp; info@artfulalchemy.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <FaTwitter />
                &emsp;
                <FaFacebook />
                &emsp;
                <FaLinkedin />
                &emsp;
                <FaSquareInstagram />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">Quick Links</h4>
                  <a className="btn btn-link" href="about.html">
                    <IoIosArrowForward />
                    About Me
                  </a>
                  <a className="btn btn-link" href="contact.html">
                    <IoIosArrowForward />
                    Contact Me
                  </a>
                  <a className="btn btn-link" href="service.html">
                    <IoIosArrowForward />
                    My Services
                  </a>
                  {/* <!--<a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a>--> */}
                </div>
                <div className="col-sm-6">
                  <h4 className="text-light mb-4">Popular Links</h4>
                  <a className="btn btn-link" href="pencil-portrait.html">
                    <IoIosArrowForward />
                    Pencil Portraits
                  </a>
                  <a className="btn btn-link" href="color-portrait.html">
                    <IoIosArrowForward />
                    Colour Portraits
                  </a>
                  <a className="btn btn-link" href="caricature.html">
                    <IoIosArrowForward />
                    Caricature
                  </a>
                  <a className="btn btn-link" href="custom-works.html">
                    <IoIosArrowForward />
                    Custom Works
                  </a>
                </div>
                {/* <!--<div className="col-sm-12">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-0 bg-secondary" style="padding: 20px 30px;" placeholder="Your Email Address"><button className="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End --> */}
      </div>
    </>
  );
}

export default Home;

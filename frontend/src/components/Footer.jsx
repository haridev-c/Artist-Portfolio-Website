import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row g-5 py-5">
          <div className="col-lg-6 pe-lg-5">
            <Link to="/" className="navbar-brand">
              <h1 className="display-5 text-primary">Artful Alchemy</h1>
            </Link>
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
                <Link className="btn btn-link" to="/about">
                  <IoIosArrowForward />
                  About Me
                </Link>
                <Link className="btn btn-link" to="/contact">
                  <IoIosArrowForward />
                  Contact Me
                </Link>
                <Link className="btn btn-link" to="/services">
                  <IoIosArrowForward />
                  My Services
                </Link>
                {/* <!--<a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a>--> */}
              </div>
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Popular Links</h4>
                <Link className="btn btn-link" to="/pencil-portrait">
                  <IoIosArrowForward />
                  Pencil Portraits
                </Link>
                <Link className="btn btn-link" to="/color-portrait">
                  <IoIosArrowForward />
                  Colour Portraits
                </Link>
                <Link className="btn btn-link" to="/caricature">
                  <IoIosArrowForward />
                  Caricature
                </Link>
                <Link className="btn btn-link" to="/custom-works">
                  <IoIosArrowForward />
                  Custom Works
                </Link>
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
  );
}

export default Footer;

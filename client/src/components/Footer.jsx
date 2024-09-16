// import { Link } from "react-router-dom";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { ChevronRight } from "lucide-react";

function Footer() {
  return (
    // <div>
    //   {/* <!-- Footer Start --> */}
    //   <div
    //     className="container-fluid footer position-relative bg-dark text-white-50 px-lg-5 wow fadeIn mt-5 px-4 py-5"
    //     data-wow-delay="0.1s"
    //   >
    //     <div className="row g-5 py-5">
    //       <div className="col-lg-6 pe-lg-5">
    //         <Link to="/" className="navbar-brand">
    //           <h1 className="display-5 text-primary">Artful Alchemy</h1>
    //         </Link>
    //         <p>Inspiring Beauty, One Artwork at a Time.</p>
    //         <p>
    //           <IoLocationSharp />
    //           &nbsp; Thondayad, Kozhikode, Kerala
    //         </p>
    //         <p>
    //           <FaPhoneAlt />
    //           &nbsp; +91 12345 67890
    //         </p>
    //         <p>
    //           <MdEmail />
    //           &nbsp; info@artfulalchemy.com
    //         </p>
    //         <div className="d-flex justify-content-start mt-4">
    //           <FaTwitter />
    //           &emsp;
    //           <FaFacebook />
    //           &emsp;
    //           <FaLinkedin />
    //           &emsp;
    //           <FaSquareInstagram />
    //         </div>
    //       </div>
    //       <div className="col-lg-6 ps-lg-5">
    //         <div className="row g-5">
    //           <div className="col-sm-6">
    //             <h4 className="text-light mb-4">Quick Links</h4>
    //             <Link className="btn btn-link" to="/about">
    //               <IoIosArrowForward />
    //               About Me
    //             </Link>
    //             <Link className="btn btn-link" to="/contact">
    //               <IoIosArrowForward />
    //               Contact Me
    //             </Link>
    //             <Link className="btn btn-link" to="/services">
    //               <IoIosArrowForward />
    //               My Services
    //             </Link>
    //             {/* <!--<a className="btn btn-link" href="">Terms & Condition</a>
    //                     <a className="btn btn-link" href="">Support</a>--> */}
    //           </div>
    //           <div className="col-sm-6">
    //             <h4 className="text-light mb-4">Popular Links</h4>
    //             <Link className="btn btn-link" to="/pencil-portrait">
    //               <IoIosArrowForward />
    //               Pencil Portraits
    //             </Link>
    //             <Link className="btn btn-link" to="/color-portrait">
    //               <IoIosArrowForward />
    //               Colour Portraits
    //             </Link>
    //             <Link className="btn btn-link" to="/caricature">
    //               <IoIosArrowForward />
    //               Caricature
    //             </Link>
    //             <Link className="btn btn-link" to="/custom-works">
    //               <IoIosArrowForward />
    //               Custom Works
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- Footer End --> */}
    // </div>
    <>
      <footer className="bg-footerBlack flex flex-col px-4 py-20 sm:flex-row sm:px-16">
        {/* First sections - Address and socials */}
        <div className="sm:w-1/2">
          <h1 className="text-3xl text-primaryBlue sm:text-7xl">
            Artful Alchemy
          </h1>
          <p className="text-footerText my-2">
            Inspiring beauty, one artwork at a time
          </p>
          <p className="text-footerText my-4 flex">
            <MapPin className="mr-2" /> Thondayad, Kozhikode, Kerala
          </p>
          <p className="text-footerText my-4 flex">
            <Phone className="mr-2" /> +91 82816 19805
          </p>
          <p className="text-footerText my-4 flex">
            <Mail className="mr-2" /> info@artfulalchemy.in
          </p>
          <p className="text-footerText flex">
            <Twitter className="mr-2" />
            <Facebook className="mx-2" />
            <Linkedin className="mx-2" />
            <Instagram className="mx-2" />
          </p>
        </div>
        <div className="my-10 flex text-white sm:my-0 sm:w-1/2">
          {/* Quick Links Section */}
          <div className="w-1/2">
            <h4 className="text-2xl">Quick Links</h4>
            <ul className="text-footerText flex flex-col">
              <li className="flex">
                <ChevronRight /> About Me
              </li>
              <li className="flex">
                <ChevronRight /> Contact Me
              </li>
              <li className="flex">
                <ChevronRight /> My Services
              </li>
            </ul>
          </div>

          {/* Popular Links Section */}
          <div className="w-1/2">
            <h4 className="text-2xl">Popular Links</h4>
            <ul className="text-footerText flex flex-col">
              <li className="flex">
                <ChevronRight /> Pencil Portrait
              </li>
              <li className="flex">
                <ChevronRight /> Color Portrait
              </li>
              <li className="flex">
                <ChevronRight /> Caricature
              </li>
              <li className="flex">
                <ChevronRight /> Custom Works
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

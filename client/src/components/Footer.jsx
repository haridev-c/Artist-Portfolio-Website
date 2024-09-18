import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex flex-col bg-footerBlack px-4 py-20 sm:flex-row sm:px-16">
        {/* First sections - Address and socials */}
        <div className="sm:w-1/2">
          <h1 className="text-3xl text-primaryBlue sm:text-7xl">
            Artful Alchemy
          </h1>
          <p className="my-2 text-footerText">
            Inspiring beauty, one artwork at a time
          </p>
          <p className="my-4 flex items-center text-footerText">
            <MapPin size={16} className="mr-2" /> Thondayad, Kozhikode, Kerala
          </p>
          <p className="my-4 flex items-center text-footerText">
            <Phone size={16} className="mr-2" /> +91 82816 19805
          </p>
          <p className="my-4 flex items-center text-footerText">
            <Mail size={16} className="mr-2" /> info@artfulalchemy.in
          </p>
          <p className="flex text-footerText">
            <Twitter size={16} className="mr-2" />
            <Facebook size={16} className="mx-2" />
            <Linkedin size={16} className="mx-2" />
            <Instagram size={16} className="mx-2" />
          </p>
        </div>
        <div className="my-10 flex text-white sm:my-0 sm:w-1/2">
          {/* Quick Links Section */}
          <div className="w-1/2">
            <h4 className="mb-4 text-2xl">Quick Links</h4>
            <ul className="flex flex-col text-footerText">
              <li className="my-3">
                <Link className="flex" to={"/about"}>
                  <ChevronRight /> About Me
                </Link>
              </li>
              <li className="my-3">
                <Link className="flex" to={"/contact"}>
                  <ChevronRight /> Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Links Section */}
          <div className="w-1/2">
            <h4 className="mb-4 text-2xl">Popular Links</h4>
            <ul className="flex flex-col text-footerText">
              <li className="my-3">
                <Link className="flex" to={"/pencil-portrait"}>
                  <ChevronRight /> Pencil Portrait
                </Link>
              </li>
              <li className="my-3">
                <Link className="flex" to={"/color-portrait"}>
                  <ChevronRight /> Color Portrait
                </Link>
              </li>
              <li className="my-3">
                <Link className="flex" to={"/caricature"}>
                  <ChevronRight /> Caricature
                </Link>
              </li>
              <li className="my-3">
                <Link className="flex" to={"/custom-works"}>
                  <ChevronRight /> Custom Works
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

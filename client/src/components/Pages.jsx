import { useState } from "react";
import { ChevronDown } from "lucide-react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Pages({ view }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {view === "mobile" ? (
        <div className="flex flex-grow flex-col sm:hidden">
          <div className="flex hover:cursor-pointer" onClick={toggleMenu}>
            Pages <ChevronDown />
          </div>
          <ul className={`flex ${menuOpen ? "flex-col" : "hidden"} flex-grow`}>
            <li className="mx-4 my-2">
              <Link to={"/pencil-portrait"}>Pencil Portrait</Link>
            </li>
            <li className="mx-4 my-2">
              <Link to={"/color-portrait"}>Color Portrait</Link>
            </li>
            <li className="mx-4 my-2">
              <Link to={"/caricature"}>Caricature</Link>
            </li>
            <li className="mx-4 my-2">
              <Link to={"/custom-works"}>Custom Works</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="relative flex flex-col">
          <div className="flex hover:cursor-pointer" onClick={toggleMenu}>
            Pages <ChevronDown />
          </div>
          <ul
            className={`flex ${menuOpen ? "flex-col" : "hidden"} absolute top-14 w-40 flex-grow rounded-md bg-white shadow-lg`}
          >
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/pencil-portrait"}>Pencil Portrait</Link>
            </li>
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/color-portrait"}>Color Portrait</Link>
            </li>
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/caricature"}>Caricature</Link>
            </li>
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/custom-works"}>Custom Works</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

Pages.propTypes = {
  view: propTypes.string,
};

export default Pages;

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function PagesDropDown({ view }) {
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
              <Link to={"/category/Pencil-Portrait"}>Pencil Portrait</Link>
            </li>
            <li className="mx-4 my-2">
              <Link to={"/category/Color-Portrait"}>Color Portrait</Link>
            </li>
            <li className="mx-4 my-2">
              <Link to={"/category/Caricature"}>Caricature</Link>
            </li>
            <li className="mx-4 my-2">
              <Link to={"/category/Custom-Works"}>Custom Works</Link>
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
              <Link to={"/category/Pencil-Portrait"}>Pencil Portrait</Link>
            </li>
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/category/Color-Portrait"}>Color Portrait</Link>
            </li>
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/category/Caricature"}>Caricature</Link>
            </li>
            <li className="mx-4 my-2 text-lightGrey hover:text-black">
              <Link to={"/category/Custom-Works"}>Custom Works</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

PagesDropDown.propTypes = {
  view: propTypes.string,
};

export default PagesDropDown;

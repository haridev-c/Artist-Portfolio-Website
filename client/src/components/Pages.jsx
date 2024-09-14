import { useState } from "react";
import { ChevronDown } from "lucide-react";
import propTypes from "prop-types";

function Pages({ view }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {view === "mobile" ? (
        <div className="flex flex-grow flex-col sm:hidden">
          <div className="flex">
            Pages <ChevronDown onClick={toggleMenu} />
          </div>
          <ul className={`flex ${menuOpen ? "flex-col" : "hidden"} flex-grow`}>
            <li className="mx-4 my-2">Pencil Portrait</li>
            <li className="mx-4 my-2">Color Portrait</li>
            <li className="mx-4 my-2">Caricature</li>
            <li className="mx-4 my-2">Custom Works</li>
          </ul>
        </div>
      ) : (
        <div className="relative flex flex-col">
          <div className="flex">
            Pages <ChevronDown onClick={toggleMenu} />
          </div>
          <ul
            className={`flex ${menuOpen ? "flex-col" : "hidden"} absolute top-14 w-40 flex-grow rounded-md bg-white shadow-lg`}
          >
            <li className="text-lightGrey mx-4 my-2 hover:text-black">
              Pencil Portrait
            </li>
            <li className="text-lightGrey mx-4 my-2 hover:text-black">
              Color Portrait
            </li>
            <li className="text-lightGrey mx-4 my-2 hover:text-black">
              Caricature
            </li>
            <li className="text-lightGrey mx-4 my-2 hover:text-black">
              Custom Works
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

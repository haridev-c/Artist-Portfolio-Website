import { useState } from "react";
import { Link } from "react-router-dom";
import { SquareMenu } from "lucide-react";
import PagesDropDown from "./PagesDropDown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`sticky top-0 flex min-h-20 flex-col bg-white px-4 shadow-lg sm:flex-row sm:justify-center`}
      >
        {/* Mobile Screen View Starts */}
        <div className="my-6 flex flex-grow items-center justify-between sm:hidden">
          <Link
            to={"/"}
            className="text-2xl font-bold text-primaryBlue sm:hidden"
          >
            <Link to={"/"}>Artful Alchemy</Link>
          </Link>
          <div className="sm:hidden">
            <SquareMenu onClick={toggleMenu} strokeWidth={1} size={32} />
          </div>
        </div>
        <ul className={`${menuOpen ? "flex" : "hidden"} flex-col`}>
          <li className="my-3 text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="my-3 text-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="my-3 flex text-lg">
            <PagesDropDown view={"mobile"} />
          </li>
          <li className="my-3 text-lg">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        {/* Mobile view ends */}

        {/* Tab view starts */}

        {/* First section starts */}
        <ul className="hidden items-center sm:flex">
          <li className="mx-4 font-semibold text-lightGrey hover:text-black">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-4 font-semibold text-lightGrey hover:text-black">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
        {/* First section ends */}

        {/* Second section starts */}
        <Link
          to={"/"}
          className="mx-8 hidden items-center bg-primaryBlue px-4 text-2xl font-bold text-white sm:flex"
        >
          Artful Alchemy
        </Link>
        {/* Second section ends */}

        {/* Third section starts */}
        <ul className="hidden items-center sm:flex">
          <li className="mx-4 flex items-center font-semibold text-lightGrey hover:text-black">
            <PagesDropDown view="tab" />
          </li>
          <li className="mx-4 font-semibold text-lightGrey hover:text-black">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        {/* Third section ends */}

        {/* Tab view ends */}
      </nav>
    </>
  );
}

export default Navbar;

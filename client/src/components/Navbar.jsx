import { useState } from "react";
// import { Link } from "react-router-dom";
import { SquareMenu } from "lucide-react";
import Pages from "./Pages";

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
          <div className="text-primaryBlue text-2xl font-bold sm:hidden">
            Artful Alchemy
          </div>
          <div className="sm:hidden">
            <SquareMenu onClick={toggleMenu} strokeWidth={1} size={32} />
          </div>
        </div>
        <ul className={`${menuOpen ? "flex" : "hidden"} flex-col`}>
          <li className="my-3 text-lg">Home</li>
          <li className="my-3 text-lg">About</li>
          <li className="my-3 flex text-lg">
            <Pages view={"mobile"} />
          </li>
          <li className="my-3 text-lg">Contact</li>
        </ul>
        {/* Mobile view ends */}

        {/* Tab view starts */}

        {/* First section starts */}
        <ul className="hidden items-center sm:flex">
          <li className="text-lightGrey mx-4 font-semibold hover:text-black">
            Home
          </li>
          <li className="text-lightGrey mx-4 font-semibold hover:text-black">
            About
          </li>
        </ul>
        {/* First section ends */}

        {/* Second section starts */}
        <div className="bg-primaryBlue mx-8 hidden items-center px-4 text-2xl font-bold text-white sm:flex">
          Artful Alchemy
        </div>
        {/* Second section ends */}

        {/* Third section starts */}
        <ul className="hidden items-center sm:flex">
          <li className="text-lightGrey mx-4 flex items-center font-semibold hover:text-black">
            <Pages view="tab" />
          </li>
          <li className="text-lightGrey mx-4 font-semibold hover:text-black">
            Contact
          </li>
        </ul>
        {/* Third section ends */}

        {/* Tab view ends */}
      </nav>
    </>
  );
}

export default Navbar;

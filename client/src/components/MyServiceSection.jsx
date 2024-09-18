import { Link } from "react-router-dom";

// image imports
import pencilPortrait1 from "../assets/images/pencil-portraits/pencil-portrait-1.jpg";
import colorPortrait1 from "../assets/images/color-portrait/color-portrait-1.jpg";
import customWorks1 from "../assets/images/custom-works/fabric-painting.jpg";
import caricature1 from "../assets/images/caricature/single.jpg";

function MyServiceSection() {
  return (
    <section className="flex flex-col items-center bg-imageFrame py-10">
      <h1 className="my-4 text-primaryBlue">MY SERVICES</h1>
      <h2 className="my-6 text-center text-4xl font-thin sm:w-1/3">
        I Provide The Best Professional Artwork In The State
      </h2>
      <div className="flex w-full flex-col sm:flex-row sm:justify-around">
        {/* Works Categories */}
        <Link to={"/pencil-portrait"}>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src={pencilPortrait1}
              alt="A Pencil Portrait"
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Pencil Portraits
          </p>
        </Link>

        <Link to={"/color-portrait"}>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src={colorPortrait1}
              alt="A Color Portrait"
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Color Portraits
          </p>
        </Link>

        <Link to={"/custom-works"}>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src={customWorks1}
              alt=""
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Custom Works
          </p>
        </Link>

        <Link to={"/caricature"}>
          <div className="bg-white p-4 pb-8 sm:h-[400px]">
            <img
              src={caricature1}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <p className="bg-white text-center text-2xl font-bold text-primaryBlue">
            Caricature
          </p>
        </Link>
      </div>
    </section>
  );
}

export default MyServiceSection;

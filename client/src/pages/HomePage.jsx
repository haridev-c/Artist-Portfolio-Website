import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import MyServiceSection from "../components/MyServiceSection";

// image imports
import colorPortrait1 from "../assets/images/color-portrait/color-portrait-1.jpg";
import colorPortrait3 from "../assets/images/color-portrait/color-portrait-3.jpg";
import colorPortrait4 from "../assets/images/color-portrait/color-portrait-4.jpg";
import pencilPortrait4 from "../assets/images/pencil-portraits/pencil-portrait-4.jpg";

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        {/* <!-- Header Start --> */}

        <section className="flex flex-col bg-headerBg sm:flex-row">
          <div className="my-8 flex flex-col justify-center px-6">
            <h2 className="font-bold text-primaryBlue">
              WELCOME TO ARTFUL ALCHEMY
            </h2>
            <h1 className="my-4 text-5xl font-thin">
              Art Studio Based in Kerala
            </h1>
            <h4 className="">Inspiring Beauty, One Artwork at a time</h4>
          </div>

          {/* sample works images */}
          <div className="flex flex-grow">
            <div className="flex w-1/2 flex-col items-end">
              <div className="m-3 bg-white p-4">
                <img
                  src={colorPortrait3}
                  className="w-[150px]"
                  alt="A color portrait"
                />
              </div>
              <div className="m-3 bg-white p-4">
                <img
                  className="w-[100px]"
                  src={colorPortrait4}
                  alt="A color portrait"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-start">
              <div className="m-3 bg-white p-4">
                <img
                  src={colorPortrait1}
                  className="w-[100px]"
                  alt="A color portrait"
                />
              </div>
              <div className="m-3 bg-white p-4">
                <img
                  className="w-[150px]"
                  src={pencilPortrait4}
                  alt="A color portrait"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Header End --> */}
        <AboutSection />

        <MyServiceSection />

        <Footer />
      </div>
    </>
  );
}

export default HomePage;

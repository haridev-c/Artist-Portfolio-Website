import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import MyServiceSection from "../components/MyServiceSection";

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
                  src="img/color-portrait/color-portrait-3.jpg"
                  className="w-[150px]"
                  alt="A color portrait"
                />
              </div>
              <div className="m-3 bg-white p-4">
                <img
                  className="w-[100px]"
                  src="img/color-portrait/color-portrait-4.jpg"
                  alt="A color portrait"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-start">
              <div className="m-3 bg-white p-4">
                <img
                  src="img/color-portrait/color-portrait-1.jpg"
                  className="w-[100px]"
                  alt="A color portrait"
                />
              </div>
              <div className="m-3 bg-white p-4">
                <img
                  className="w-[150px]"
                  src="img/pencil-portraits/pencil-portrait-4.jpg"
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

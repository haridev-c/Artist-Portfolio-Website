import Navbar from "../components/Navbar";
import About from "../components/About";
import Facts from "../components/Facts";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="flex min-h-[50vh] flex-col bg-headerBg sm:flex-row">
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
        <div className="flex w-3/5 items-start justify-center">
          <div className="m-3 w-2/5 bg-white p-4">
            <img
              src="img/hero-1.jpg"
              className="w-[200px] object-cover sm:h-full sm:w-full"
              alt="A color portrait"
            />
          </div>
          <div className="m-3 w-2/5 bg-white p-4">
            <img
              className="w-[200px] object-cover sm:h-full sm:w-full"
              src="img/hero-2.jpg"
              alt="A color portrait"
            />
          </div>
        </div>
      </section>

      <About />
      <Facts />
      <Footer />
    </>
  );
}

export default AboutPage;

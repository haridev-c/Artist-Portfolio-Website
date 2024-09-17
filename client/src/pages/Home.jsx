import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        {/* <!-- Header Start --> */}

        <section className="flex flex-col bg-headerBg sm:flex-row">
          <div className="my-8 px-6">
            <h2 className="font-bold text-primaryBlue">
              WELCOME TO ARTFUL ALCHEMY
            </h2>
            <h1 className="my-4 text-5xl font-thin">
              Art Studio Based in Kerala
            </h1>
            <h4 className="">Inspiring Beauty, One Artwork at a time</h4>
          </div>

          {/* sample works */}
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
        <About />
        {/* <!-- Service Start --> */}
        <div className="container-xxl bg-light my-5 py-5">
          <div className="container py-5">
            <div
              className="wow fadeInUp mx-auto mb-5 text-center"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="text-primary text-uppercase mb-2">My Services</p>
              <h1 className="display-6 mb-4">
                I Provide The Best Professional Artwork In The State
              </h1>
            </div>
            <div className="row g-3">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/pencil-portraits/pencil-portrait-1.jpg"
                      alt="A pencil portrait"
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/pencil-portrait.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Link
                      to="/pencil-portrait"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Pencil Portraits</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/color-portrait/color-portrait-1.jpg"
                      alt=""
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/color-portrait.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Link
                      to="/color-portrait"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Colour Portraits</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/caricature/single.jpg"
                      alt=""
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/caricature.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Link to="/caricature" style={{ textDecoration: "none" }}>
                      <h4>Caricature</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src="img/custom-works/fabric-painting.jpg"
                      alt=""
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/custom-works.html"
                      >
                        <i className="fa fa-link text-primary"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Link to="/custom-works" style={{ textDecoration: "none" }}>
                      <h4>Customized Works</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Service Ends--> */}
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home;

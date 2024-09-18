import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      {/* <!-- Header Start --> */}

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
      {/* <!-- Header End --> */}

      {/* <!-- Contact Start --> */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto text-center"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="text-primary text-uppercase mb-2">Contact Me</p>
            <h1 className="display-6 mb-5">
              If You Have Any Query, Please Contact Me
            </h1>
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s"> */}
      {/* <!--<p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>--> */}
      {/* <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 200 }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary px-5 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Contact End --> */}

      <section className="flex min-h-screen flex-col items-center p-4">
        <h1 className="my-10 text-primaryBlue">CONTACT ME</h1>
        <h4 className="text-center text-4xl font-thin">
          If You Have Any Query, Please Contact Me
        </h4>
        <form className="my-10 flex w-full flex-col sm:w-3/5">
          <input
            type="text"
            className="my-2 h-16 w-full rounded border p-2"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="my-2 h-16 w-full rounded border p-2"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="my-2 h-16 w-full rounded border p-2"
            placeholder="Subject"
          />
          <textarea
            className="my-2 h-60 w-full rounded border p-2"
            placeholder="Leave a message here"
          />
          <button className="my-4 w-1/2 self-center rounded bg-primaryBlue py-4 text-white">
            Send Message
          </button>
        </form>
      </section>

      {/* <!-- Google Map Start --> */}
      <div className="w-full sm:p-4">
        <iframe
          className="w-full sm:rounded"
          style={{ height: 450 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7825.812479697363!2d75.80028114164224!3d11.268302305647705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfc1eb9a7af%3A0x6d9a47a0bd30b9ca!2sThondayad%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708787585830!5m2!1sen!2sin"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      {/* <!-- Google Map End --> */}

      <Footer />
    </>
  );
}

export default Contact;

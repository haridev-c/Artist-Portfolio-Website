import React from "react";

function Facts() {
  return (
    <>
      {/* <!-- Facts Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="text-primary text-uppercase mb-2">Why Choose Me!</p>
            <h1 className="display-6 mb-5">
              The Leading Design Studio In The State
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  15
                </h1>
                <h4 className="mb-3">Award Winning</h4>
                <span>
                  Have participated in various competitions as well as been
                  recognized in various exhibitions for my works
                </span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  10
                </h1>
                <h4 className="mb-3">Years Experience</h4>
                <span>
                  Have worked for over a decade and satisfied customers
                  throughout the state as well as the country
                </span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  500
                </h1>
                <h4 className="mb-3">Happy Clients</h4>
                <span>
                  More than 500 happy customers throughout my 10 years career of
                  creating art
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}
    </>
  );
}

export default Facts;

import React from "react";

function Testimonials() {
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="text-primary text-uppercase mb-2">Client's Review</p>
            <h1 className="display-6 mb-0">
              More Than 500+ Customers Trusted Me
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Ashwathy</h5>
                  <span>CEO</span>
                </div>
              </div>
              <p className="mb-0">
                “I commissioned a custom portrait, and the result left me
                speechless. The artist’s attention to detail and emotional depth
                transformed my vision into reality. Highly recommended!”
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Abhinav</h5>
                  <span>Photographer</span>
                </div>
              </div>
              <p className="mb-0">
                “Artful Alchemy doesn’t just create art; they weave stories.
                Each stroke carries meaning, and their landscapes transport you.
                A true gem for art enthusiasts!”
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-3.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Vijay</h5>
                  <span>Developer</span>
                </div>
              </div>
              <p className="mb-0">
                “From concept to canvas, Artful Alchemy listens. They captured
                my pet’s soul in a portrait—every whisker, every twinkle. A
                cherished keepsake forever.”
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-4.jpg"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Revathy</h5>
                  <span>Teacher</span>
                </div>
              </div>
              <p className="mb-0">
                “Working with Artful Alchemy was like watching magic unfold.
                Their passion radiates through their art. If you seek beauty,
                look no further.”
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}

export default Testimonials;

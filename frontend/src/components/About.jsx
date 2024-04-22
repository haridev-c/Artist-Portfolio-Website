import React from "react";
import { BsCheckLg } from "react-icons/bs";

function About() {
  return (
    <>
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid bg-light p-3"
                    src="img/about-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid bg-light p-3"
                    src="img/about-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <p className="text-primary text-uppercase mb-2">About Me</p>
                <h1 className="display-6 mb-4">
                  I'm a Creative And Professional Artist
                </h1>
                <p>
                  In my cozy studio, I blend pigments and whispers of
                  inspiration. My art is a journey—a fusion of alchemy and
                  authenticity. With every canvas, I aim to evoke wonder,
                  provoke thought, and ignite joy. Thank you for joining me on
                  this artistic adventure. Let’s create magic, one artwork at a
                  time.
                </p>
                <p>
                  As an artist, I don’t merely paint; I breathe life into
                  visions. When you commission a piece, you’re not hiring a mere
                  artist—you’re gaining a collaborator who listens, interprets,
                  and infuses heart into every stroke. Whether it’s a cherished
                  portrait, a captivating landscape, or a custom illustration, I
                  immerse myself in your story. Your satisfaction isn’t just my
                  goal; it’s my masterpiece. Let’s transform your ideas into
                  timeless art together.
                </p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <BsCheckLg />
                    &nbsp; Quality Arts
                  </div>
                  <div className="col-sm-6">
                    <BsCheckLg />
                    &nbsp; Custom Works
                  </div>
                  <div className="col-sm-6">
                    <BsCheckLg />
                    &nbsp; Online Order
                  </div>
                  <div className="col-sm-6">
                    <BsCheckLg />
                    &nbsp; Home Delivery
                  </div>
                </div>
                {/* <!--<a className="btn btn-primary py-3 px-5" href="">Read More</a>--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
}

export default About;

import React from "react";

function Navbar() {
  return (
    <div>
      {/* <!-- Navbar Start --> */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="text-primary">Artful Alchemy</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
          </div>
          <a
            href="index.html"
            className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block"
          >
            <h1 className="text-white">Artful Alchemy</h1>
          </a>
          <div className="navbar-nav me-auto py-0">
            {/* <!--<a href="project.html" className="nav-item nav-link">Projects</a>--> */}
            {/* <!-- Pages dropdown Starts --> */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 shadow-sm border-0 m-0">
                <a href="pencil-portrait.html" className="dropdown-item">
                  Pencil Portrait
                </a>
                <a href="color-portrait.html" className="dropdown-item">
                  Colour Portraits
                </a>
                <a href="caricature.html" className="dropdown-item">
                  Caricatures
                </a>
                <a href="custom-works.html" className="dropdown-item">
                  Custom Works
                </a>
              </div>
            </div>
            {/* <!--Pages dropdown--> */}
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
}

export default Navbar;

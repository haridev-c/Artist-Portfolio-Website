import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <!-- Navbar Start --> */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <h1 className="text-primary">Artful Alchemy</h1>
        </Link>
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
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
          </div>
          <Link
            to="/"
            className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block"
          >
            <h1 className="text-white">Artful Alchemy</h1>
          </Link>
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
                <Link to="/pencil-portrait" className="dropdown-item">
                  Pencil Portrait
                </Link>
                <Link to="/color-portrait" className="dropdown-item">
                  Colour Portraits
                </Link>
                <Link to="/caricature" className="dropdown-item">
                  Caricatures
                </Link>
                <Link to="/custom-works" className="dropdown-item">
                  Custom Works
                </Link>
              </div>
            </div>
            {/* <!--Pages dropdown--> */}
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
}

export default Navbar;

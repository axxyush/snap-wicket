import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark transition-all duration-300 ${
          scrolled ? "py-2 " : "py-4"
        }`}
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="container-fluid">
          <a
            style={{ transition: "all 0.3s ease" }}
            className={`navbar-brand ${scrolled ? "fs-3" : "fs-2"}`}
            href="/"
          >
            Snap Wicket
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={{ transition: "all 0.3s ease" }}
                  className={`nav-link ${scrolled ? "fs-6" : "fs-5"}`}
                  href="/"
                >
                  Play Game
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ transition: "all 0.3s ease" }}
                  className={`nav-link ${scrolled ? "fs-6" : "fs-5"}`}
                  href="/"
                >
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ transition: "all 0.3s ease" }}
                  className={`nav-link ${scrolled ? "fs-6" : "fs-5"}`}
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Player"
                aria-label="Search"
              />
              <button
                style={{ transition: "all 0.3s ease" }}
                className={`btn btn-outline-success ${
                  scrolled ? "fs-6" : "fs-5"
                }`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

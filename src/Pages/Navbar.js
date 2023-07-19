import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-container">
        <span className="name">Bader Mahdawi</span>
        <ul className="nav-links">
          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/" || location.pathname === "/about"
                  ? "active"
                  : ""
              }
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

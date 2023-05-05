import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location === "/" && "active"}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${location === "/about" && "active"}`}
                to="/1/places"
              >
                My Places
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${location === "/about" && "active"}`}
                to="/places/addPlace"
              >
                Add Place
              </Link>
            </li>
          </ul>
          <Link to="/login">
            <button className="btn btn-info mx-1">Login</button>
          </Link>
          <button className="btn btn-info mx-1">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

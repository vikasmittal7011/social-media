import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const location = useLocation().pathname;
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          myMedia
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
            <Button name="Login" type="info" />
          </Link>
          <Button name="Logout" type="info" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

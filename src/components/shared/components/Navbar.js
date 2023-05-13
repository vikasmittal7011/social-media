import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state);
  const { updateUserLogin } = bindActionCreators(actionCreators, dispatch);
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
            {userLogin && (
              <li className="nav-item">
                <Link
                  className={`nav-link  ${location === "/about" && "active"}`}
                  to="/2/places"
                >
                  My Places
                </Link>
              </li>
            )}
            {userLogin && (
              <li className="nav-item">
                <Link
                  className={`nav-link  ${location === "/about" && "active"}`}
                  to="/places/addPlace"
                >
                  Add Place
                </Link>
              </li>
            )}
          </ul>
          {!userLogin && (
            <Link to="/login">
              <Button name="Login" type="info" />
            </Link>
          )}
          {userLogin && (
            <Button
              name="Logout"
              type="info"
              onClick={() => {
                updateUserLogin(false);
                localStorage.removeItem("userId");
                navigate("/");
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

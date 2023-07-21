import React, { useRef } from "react";
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
  const { userId } = userLogin;
  const { updateUserLogin } = bindActionCreators(actionCreators, dispatch);
  const location = useLocation().pathname;

  const clickRef = useRef(null);

  const setClickRef = () => {
    if (window.innerWidth < 699) {
      clickRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          myMedia
        </Link>
        <button
          ref={clickRef}
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
                onClick={setClickRef}
              >
                Home
              </Link>
            </li>
            {userId && (
              <li className="nav-item">
                <Link
                  className={`nav-link  ${location === "/about" && "active"}`}
                  to={`/${userId}/places`}
                  onClick={setClickRef}
                >
                  My Places
                </Link>
              </li>
            )}
            {userId && (
              <li className="nav-item">
                <Link
                  className={`nav-link  ${location === "/about" && "active"}`}
                  to="/places/addPlace"
                  onClick={setClickRef}
                >
                  Add Place
                </Link>
              </li>
            )}
          </ul>
          {!userId && (
            <Link to="/login">
              <Button name="Login" type="info" onClick={setClickRef} />
            </Link>
          )}
          {userId && (
            <Button
              name="Logout"
              type="info"
              onClick={() => {
                updateUserLogin(false, false);
                localStorage.removeItem("userData");
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

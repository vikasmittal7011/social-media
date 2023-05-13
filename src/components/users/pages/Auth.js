import React from "react";
import Input from "../../shared/components/Input";
import FormButton from "../../shared/components/FormButton";
import { useCallback } from "react";
import { useState } from "react";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/components/Loading";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../state/index";
import { useHttpClient } from "../../../hooks/fetchCall";

function Auth() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { activateAlert, removeAlert, updateUserLogin } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { loading, sendRequest } = useHttpClient();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userDetails;

  const [userIsValid, setUserIsValid] = useState(false);

  const handleEmail = useCallback(
    (email, id) => {
      setUserDetails({
        ...userDetails,
        [id]: email,
      });
      userValid(userDetails.password, email.indexOf("@"), email.indexOf("."));
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handlePassword = useCallback(
    (password, id) => {
      setUserDetails({
        ...userDetails,
        [id]: password,
      });
      userValid(
        password,
        userDetails.email.indexOf("@"),
        userDetails.email.indexOf(".")
      );
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const userValid = (pass, atTheRate, dot) => {
    if (pass.length >= 8 && atTheRate > 3 && dot > atTheRate + 2) {
      setUserIsValid(true);
    } else if (pass.length < 8) {
      setUserIsValid(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendRequest(
        `api/users/login`,
        "POST",
        JSON.stringify({ email, password }),
        {
          "Content-Type": "application/json",
        }
      );
      const jsonData = response;
      const { existingUser, success, message } = jsonData;
      if (!success) {
        activateAlert(message, "Danger");
        setTimeout(() => {
          removeAlert();
        }, 2000);
      } else {
        updateUserLogin(true);
        activateAlert(message, "Success");
        setTimeout(() => {
          removeAlert();
        }, 2000);
        localStorage.setItem("userId", existingUser._id);
        navigate("/");
      }
    } catch (err) {}
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h2 className="text-center">Login Here !!!</h2>
      <div className="container w-75">
        <form className="mt-5" onSubmit={handleFormSubmit}>
          <Input
            title="Email"
            type="email"
            id="email"
            required={true}
            placeholder="Enter your email..."
            onInput={handleEmail}
          />
          <Input
            title="Password"
            type="password"
            id="password"
            required={true}
            placeholder="Enter your password..."
            onInput={handlePassword}
            length={8}
          />
          <div className="text-center">
            <FormButton name="Login" type="success" activate={userIsValid} />
            <Button
              onClick={() => {
                navigate("/register");
              }}
              name="Register"
              type="secondary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;

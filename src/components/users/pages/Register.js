import React from "react";
import Input from "../../shared/components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormButton from "../../shared/components/FormButton";
import Button from "../../shared/components/Button";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import Loading from "../../shared/components/Loading";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { activateAlert } = bindActionCreators(actionCreators, dispatch);
  console.log(activateAlert);
  const { api } = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const [userIsValid, setuserIsValid] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "password",
    confirmPassword: "confimpassword",
  });

  const { name, email, password, confirmPassword } = userDetails;

  const handleName = useCallback(
    (name, id) => {
      setUserDetails({
        ...userDetails,
        [id]: name,
      });
      checkUserDetails(name, email, password, confirmPassword);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handleEmail = useCallback(
    (email, id) => {
      setUserDetails({
        ...userDetails,
        [id]: email,
      });
      checkUserDetails(name, email, password, confirmPassword);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handlePassword = useCallback(
    (password, id) => {
      setUserDetails({
        ...userDetails,
        [id]: password,
      });
      checkUserDetails(name, email, password, confirmPassword);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handleConfirmPassword = useCallback(
    (cPassword, id) => {
      setUserDetails({
        ...userDetails,
        [id]: cPassword,
      });
      checkUserDetails(name, email, password, cPassword);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const checkUserDetails = (name, email, password, cpassword) => {
    let atTheRate = email.indexOf("@");
    let dot = email.indexOf(".");
    if (name.length >= 3 && atTheRate > 5 && dot > atTheRate + 3) {
      if (password === cpassword) {
        setuserIsValid(true);
      }
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${api}api/users/registe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      // if()
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h2 className="text-center">Register Yourself !!!</h2>
      <div className="container w-75">
        <form className="mt-4" onSubmit={handleFormSubmit}>
          <Input
            title="Name"
            type="text"
            id="name"
            required={true}
            placeholder="Enter your name..."
            onInput={handleName}
            length={3}
          />
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
          <Input
            title="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password..."
            required={true}
            onInput={handleConfirmPassword}
            length={8}
          />
          <Input title="Image" type="file" id="image" />
          <div className="text-center">
            <FormButton name="Register" type="primary" activate={userIsValid} />
            <Button
              name="Login"
              type="success"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

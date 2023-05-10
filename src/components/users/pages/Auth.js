import React from "react";
import Input from "../../shared/components/Input";
import FormButton from "../../shared/components/FormButton";
import { useCallback } from "react";
import { useState } from "react";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
function Auth() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails);
  };

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

import React from "react";
import Input from "../../shared/components/Input";
import FromButton from "../../shared/components/FormButton";
import { useCallback } from "react";
import { useState } from "react";
function Auth() {
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
          <FromButton name="Login" type="success" activate={userIsValid} />
        </form>
      </div>
    </div>
  );
}

export default Auth;

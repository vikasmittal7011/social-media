import React from "react";
import Input from "../../shared/components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormButton from "../../shared/components/FormButton";
import Button from "../../shared/components/Button";
import { useCallback } from "react";
import Loading from "../../shared/components/Loading";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHttpClient } from "../../../hooks/fetchCall";
import ImageUpload from "../../shared/components/ImageUpload";

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { loading, sendRequest } = useHttpClient();

  const [userIsValid, setuserIsValid] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "password",
    confirmPassword: "confimpassword",
    image: "",
  });

  const { name, email, password, confirmPassword, image } = userDetails;

  const handleName = useCallback(
    (name, id) => {
      setUserDetails({
        ...userDetails,
        [id]: name,
      });
      checkUserDetails(name, email, password, confirmPassword, image);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handleEmail = useCallback(
    (email, id) => {
      setUserDetails({
        ...userDetails,
        [id]: email,
      });
      checkUserDetails(name, email, password, confirmPassword, image);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handlePassword = useCallback(
    (password, id) => {
      setUserDetails({
        ...userDetails,
        [id]: password,
      });
      checkUserDetails(name, email, password, confirmPassword, image);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handleConfirmPassword = useCallback(
    (cPassword, id) => {
      setUserDetails({
        ...userDetails,
        [id]: cPassword,
      });
      checkUserDetails(name, email, password, cPassword, image);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const handleImage = useCallback(
    (image, id) => {
      setUserDetails({
        ...userDetails,
        [id]: image,
      });
      checkUserDetails(name, email, password, confirmPassword, image);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userDetails]
  );

  const checkUserDetails = (name, email, password, cpassword, image) => {
    let atTheRate = email.indexOf("@");
    let dot = email.indexOf(".");
    if (
      name.length >= 3 &&
      atTheRate > 3 &&
      dot > atTheRate + 3 &&
      image.name
    ) {
      if (password === cpassword) {
        setuserIsValid(true);
      } else {
        setuserIsValid(false);
      }
    } else {
      setuserIsValid(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    try {
      const response = await sendRequest(
        "api/users/register",
        "POST",
        formData
      );
      const { message, success } = response;
      if (!success) {
        activateAlert(message, "Danger");
        setTimeout(() => {
          removeAlert(null);
        }, 5000);
      } else {
        activateAlert(message, "Success");
        setTimeout(() => {
          removeAlert(null);
        }, 2000);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <h2 className="text-center">Register Yourself !!!</h2>
        <div className="container w-75">
          <form
            enctype="multipart/form-data"
            className="mt-2"
            onSubmit={handleFormSubmit}
          >
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
            <ImageUpload id="image" onInput={handleImage} />
            <div className="text-center mt-4">
              <FormButton
                name="Register"
                type="primary"
                activate={userIsValid}
              />
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
    </React.Fragment>
  );
}

export default Register;

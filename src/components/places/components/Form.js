import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../../../state/index";
import { useHttpClient } from "../../../hooks/fetchCall";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";
import Loading from "../../shared/components/Loading";
import ImageUpload from "../../shared/components/ImageUpload";

function Form() {
  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    useDispatch()
  );
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state);
  const { userId, token } = userLogin;
  const { loading, sendRequest } = useHttpClient();

  const [placeDetails, setPlaceDetails] = useState({
    name: "",
    address: "",
    description: "",
    image: "",
  });

  const [isValid, setIsValid] = useState(false);

  const { name, description, address, image } = placeDetails;

  const handlenameChnage = useCallback(
    (name, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: name,
      });
      checkValid(name, description, address, image);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [placeDetails]
  );

  const handleAddressChnage = useCallback(
    (address, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: address,
      });
      checkValid(name, description, address, image);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [placeDetails]
  );

  const handleDescriptionChnage = useCallback(
    (description, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: description,
      });
      checkValid(name, description, address, image);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [placeDetails]
  );

  const handleImage = useCallback(
    (image, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: image,
      });
      checkValid(name, description, address, image);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [placeDetails]
  );

  const handleSubmition = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", name);
    formData.append("descrition", description);
    formData.append("address", address);
    formData.append("userID", userId);
    formData.append("image", image);
    try {
      const response = await sendRequest("api/places/", "POST", formData, {
        Authorization: "Breare " + token,
      });
      if (response.success) {
        activateAlert("Place is successfully added!", "Success");
        setTimeout(() => {
          removeAlert();
        }, 2000);
        navigate(`/${userId}/places`);
      } else {
        activateAlert("Something is wrong, try again later!", "Danger");
        setTimeout(() => {
          removeAlert();
        }, 2000);
      }
    } catch (err) {}
  };

  const checkValid = (name, des, add, image) => {
    if (name.length >= 2 && des.length >=8  && add.length >= 5 && image.name) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <form onSubmit={handleSubmition}>
        <Input
          title="Name of Place"
          id="name"
          type="text"
          placeholder="Enter name of place"
          required={true}
          onInput={handlenameChnage}
          length={5}
        />
        <Input
          title="Address"
          id="address"
          type="text"
          placeholder="Enter address of place"
          required={true}
          onInput={handleAddressChnage}
          length={10}
        />
        <Input
          title="Description"
          id="description"
          type="text"
          placeholder="Write something about it"
          required={true}
          textarea={true}
          onInput={handleDescriptionChnage}
          length={20}
        />
        <ImageUpload id="image" onInput={handleImage} />

        <FormButton
          name="Add Place"
          outline={true}
          type="primary"
          activate={isValid}
        />
      </form>
    </div>
  );
}

export default Form;

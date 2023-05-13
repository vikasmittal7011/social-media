import { useSelector } from "react-redux";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../../state/index";
import { useHttpClient } from "../../../hooks/fetchCall";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";
import Loading from "../../shared/components/Loading";

function Form() {
  const places = useSelector((state) => state.place);

  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    useDispatch()
  );

  const { loading, sendRequest } = useHttpClient();

  const [placeDetails, setPlaceDetails] = useState(places);

  const [isValid, setIsValid] = useState(false);

  const { name, address, description } = placeDetails;

  const handleTitleChnage = useCallback(
    (title, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: title,
      });
      checkValid(
        placeDetails.name,
        placeDetails.address,
        placeDetails.description
      );
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
      checkValid(
        placeDetails.name,
        placeDetails.address,
        placeDetails.description
      );
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
      checkValid(
        placeDetails.name,
        placeDetails.address,
        placeDetails.description
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [placeDetails]
  );

  const handleSubmition = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      const response = await sendRequest(
        "api/places/",
        "POST",
        JSON.stringify({
          title: name,
          descrition: description,
          address: address,
          userID: userId,
        }),
        { "Content-Type": "application/json" }
      );
      if (response) {
        activateAlert("Place is successfully added!", "Success");
        setTimeout(() => {
          removeAlert();
        }, 2000);
      } else {
        activateAlert("Something is wrong, try again later!", "Danger");
        setTimeout(() => {
          removeAlert();
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkValid = (title, des, add) => {
    if (title.length > 2 && des.length > 3 && add.length > 5) {
      setIsValid(true);
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
          onInput={handleTitleChnage}
          length={5}
        />
        <Input
          title="Address"
          id="address"
          type="text"
          placeholder="Enter address of place"
          required={true}
          onInput={handleDescriptionChnage}
          length={10}
        />
        <Input
          title="Description"
          id="description"
          type="text"
          placeholder="Write something about it"
          required={true}
          textarea={true}
          onInput={handleAddressChnage}
          length={20}
        />
        <Input title="Image" id="image" type="file" />

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

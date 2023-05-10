import { useSelector } from "react-redux";
import React, { useCallback, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { actionCreators } from "../../../state/index";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";

function Form() {
  const dispatch = useDispatch();
  const { addPlace } = bindActionCreators(actionCreators, dispatch);
  const places = useSelector((state) => state.place);

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

  const handleSubmition = (event) => {
    event.preventDefault();
    addPlace(name, description, address, isValid);
  };

  const checkValid = (title, des, add) => {
    if (title.length > 2 && des.length > 3 && add.length > 5) {
      setIsValid(true);
    }
  };

  return (
    <div>
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

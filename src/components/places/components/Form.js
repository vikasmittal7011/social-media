import React, { useCallback, useState } from "react";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";

function Form() {
  const [placeDetails, setPlaceDetails] = useState({
    name: "",
    description: "",
    address: "",
    isValid: false,
  });

  const handleTitleChnage = useCallback(
    (title, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: title,
      });
      if (
        placeDetails.name.length > 2 &&
        placeDetails.description.length > 3 &&
        placeDetails.address.length > 5
      ) {
        setPlaceDetails({
          ...placeDetails,
          isValid: true,
        });
      }
    },
    [placeDetails]
  );

  const handleDescriptionChnage = useCallback(
    (description, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: description,
      });
      if (
        placeDetails.name.length > 2 &&
        placeDetails.description.length > 3 &&
        placeDetails.address.length > 5
      ) {
        setPlaceDetails({
          ...placeDetails,
          isValid: true,
        });
      }
    },
    [placeDetails]
  );

  const handleAddressChnage = useCallback(
    (address, id) => {
      setPlaceDetails({
        ...placeDetails,
        [id]: address,
      });
      if (
        placeDetails.name.length > 2 &&
        placeDetails.description.length > 3 &&
        placeDetails.address.length > 5
      ) {
        setPlaceDetails({
          ...placeDetails,
          isValid: true,
        });
      }
    },
    [placeDetails]
  );

  const handleSubmition = (event) => {
    event.preventDefault();
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
        />
        <Input
          title="Address"
          id="address"
          type="text"
          placeholder="Enter address of place"
          required={true}
          onInput={handleDescriptionChnage}
        />
        <Input
          title="Description"
          id="description"
          type="text"
          placeholder="Write something about it"
          required={true}
          textarea={true}
          onInput={handleAddressChnage}
        />
        <Input title="Image" id="image" type="file" />

        <FormButton
          name="Add Place"
          outline={true}
          type="primary"
          activate={placeDetails.isValid}
        />
      </form>
    </div>
  );
}

export default Form;

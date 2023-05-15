import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";
import { useCallback } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../../hooks/fetchCall";

function UpdatePlace() {
  const { sendRequest } = useHttpClient();

  const placeId = useParams().placeId;

  const [placeForUpdate, setPLaceForUpdate] = useState();

  const [updatePlace, setUpdatePlace] = useState(placeForUpdate);

  const [isFormvalid, setIsFormvalid] = useState(false);

  const navigate = useNavigate();

  const { userLogin } = useSelector((state) => state);

  const handleTitleChange = useCallback(
    (title, id) => {
      setUpdatePlace({
        ...updatePlace,
        [id]: title,
      });
      checkValid(title, updatePlace.descrition);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updatePlace]
  );

  const handleDesChange = useCallback(
    (des, id) => {
      setUpdatePlace({
        ...updatePlace,
        [id]: des,
      });
      checkValid(updatePlace.title, des);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updatePlace]
  );

  const checkValid = (title, des) => {
    if (title.length >= 3 && des.length >= 5) {
      setIsFormvalid(true);
    } else {
      setIsFormvalid(false);
    }
  };

  useEffect(() => {
    const getPlace = async () => {
      const place = await sendRequest(`api/places/${placeId}`);
      setPLaceForUpdate(place);
      setUpdatePlace(place);
    };
    getPlace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdatePlaceHandler = async (event) => {
    event.preventDefault();
  };

  if (!userLogin) {
    navigate("/");
  }
  return (
    placeForUpdate && (
      <div className="container" style={{ width: "70vw" }}>
        <h2 className="text-center">Update Place Here!!! </h2>
        <form onSubmit={onUpdatePlaceHandler}>
          <Input
            title="Name of Place"
            id="title"
            type="text"
            placeholder="Enter name of place"
            required={true}
            value={placeForUpdate.title}
            onInput={handleTitleChange}
            length={3}
          />
          <Input
            title="Descrition"
            id="descrition"
            type="text"
            placeholder="Write somthing about it..."
            required={true}
            value={placeForUpdate.descrition}
            textarea={true}
            onInput={handleDesChange}
            length={5}
          />
          <FormButton
            name="Update Place"
            type="primary"
            activate={isFormvalid}
          />
        </form>
      </div>
    )
  );
}

export default UpdatePlace;

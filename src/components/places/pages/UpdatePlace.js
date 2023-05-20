import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../../hooks/fetchCall";
import Loading from "../../shared/components/Loading";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/index";

function UpdatePlace() {
  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const placeId = useParams().placeId;

  const [updatePlace, setUpdatePlace] = useState();

  const [isFormvalid, setIsFormvalid] = useState(true);

  const navigate = useNavigate();

  const { userLogin } = useSelector((state) => state);

  const { userId, token } = userLogin;

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
    if (title.length >= 3 && des.length >= 8) {
      setIsFormvalid(true);
    } else {
      setIsFormvalid(false);
    }
  };

  useEffect(() => {
    const getPlace = async () => {
      const place = await sendRequest(`api/places/${placeId}`);
      setUpdatePlace(place);
    };
    getPlace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdatePlaceHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await sendRequest(
        `api/places/${placeId}`,
        "PATCH",
        JSON.stringify({
          title: updatePlace.title,
          descrition: updatePlace.descrition,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Breare " + token,
        }
      );
      if (response.success) {
        activateAlert(response.message, "Success");
        setTimeout(() => {
          removeAlert();
        }, 2000);
        navigate(`/${updatePlace.userID}/places`);
      } else {
        activateAlert(response.message, "Success");
        setTimeout(() => {
          removeAlert();
        }, 2000);
      }
    } catch (err) {}
  };

  if (!userId) {
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    updatePlace &&
    !loading && (
      <div className="container" style={{ width: "70vw" }}>
        <h2 className="text-center">Update Place Here!!! </h2>
        <form onSubmit={onUpdatePlaceHandler}>
          <Input
            title="Name of Place"
            id="title"
            type="text"
            placeholder="Enter name of place"
            required={true}
            value={updatePlace.title}
            onInput={handleTitleChange}
            length={3}
          />
          <Input
            title="Descrition"
            id="descrition"
            type="text"
            placeholder="Write somthing about it..."
            required={true}
            value={updatePlace.descrition}
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

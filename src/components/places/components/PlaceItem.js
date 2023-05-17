import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../../hooks/fetchCall";
import Loading from "../../shared/components/Loading";

function PlaceItem(props) {
  const { userLogin, api } = useSelector((state) => state);
  const navigate = useNavigate();
  const { title, image, descrition, address, _id, userID } = props.singlePlace;
  const { loading, sendRequest } = useHttpClient();
  const [validUser, setValidUser] = useState(false);

  const dispatch = useDispatch();
  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const editFormrTransfer = () => {
    navigate(`/places/${_id}`);
  };

  const handleVisitClick = () => {
    activateAlert("Now map is not aviable, Sorry!!", "Success");
    setTimeout(() => {
      removeAlert();
    }, 2000);
  };

  const deletePlace = async (event) => {
    event.preventDefault();
    const isConfirm = window.confirm(
      "Are to sure to delete this place. We can't able to undo this process!!!"
    );

    if (isConfirm) {
      try {
        const response = await sendRequest(`api/places/${_id}`, "DELETE");
        if (response.sucess) {
          activateAlert(response.message, "Success");
          setTimeout(() => {
            removeAlert();
          }, 2000);
          navigate(`/`);
        } else {
          activateAlert(response.message, "Danger");
          setTimeout(() => {
            removeAlert();
          }, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setValidUser(userLogin === userID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card text-center my-3">
      {loading && <Loading />}
      <div className="card-header">
        <img src={`${api}${image}`} alt={title} className="w-100" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h5>{address}</h5>
        <p className="card-text">{descrition}</p>
      </div>
      <div className="card-footer">
        <Button
          name="Visit on Map"
          type="dark m-2"
          outline={true}
          onClick={handleVisitClick}
        />
        {userLogin && validUser && (
          <Button onClick={deletePlace} name="Delete" type="danger m-2" />
        )}
        {userLogin && validUser && (
          <Button
            onClick={editFormrTransfer}
            name="Edit"
            type="secondary m-2"
          />
        )}
      </div>
    </div>
  );
}

export default PlaceItem;

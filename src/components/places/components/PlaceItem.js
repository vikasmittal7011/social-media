import React from "react";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";

function PlaceItem(props) {
  const navigate = useNavigate();
  const { title, image, descrition, address, id } = props.singlePlace;

  const dispatch = useDispatch();
  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const editFormrTransfer = () => {
    navigate(`/places/${id}`);
  };

  const handleVisitClick = () => {
    activateAlert("Now map is not aviable, Sorry!!", "Success");
    setTimeout(() => {
      removeAlert();
    }, 2000);
  };
  return (
    <div className="card text-center mt-3">
      <div className="card-header">
        <img src={image} alt={title} className="w-100" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3>{address}</h3>
        <p className="card-text">{descrition}</p>
      </div>
      <div className="card-footer">
        <Button
          name="Visit on Map"
          type="dark m-2"
          outline={true}
          onClick={handleVisitClick}
        />
        <Button name="Delete" type="danger m-2" />
        <Button onClick={editFormrTransfer} name="Edit" type="secondary m-2" />
      </div>
    </div>
  );
}

export default PlaceItem;

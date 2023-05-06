import React from "react";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function PlaceItem(props) {
  const { title, image, descrition, address } = props.singlePlace;

  const dispatch = useDispatch();
  const { activateAlert, removeAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
        <button className="btn btn-outline-dark m-2" onClick={handleVisitClick}>
          Visit on Map
        </button>
        <button className="btn btn-secondary m-2">Edit</button>
        <button className="btn btn-danger m-2">Delete</button>
      </div>
    </div>
  );
}

export default PlaceItem;

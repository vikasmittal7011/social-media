import React from "react";

function PlaceItem(props) {
  const { title, image, descrition, address } = props.singlePlace;
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
        <button className="btn btn-primary m-2">Visit</button>
        <button className="btn btn-primary m-2">Edit</button>
        <button className="btn btn-primary m-2">Delete</button>
      </div>
    </div>
  );
}

export default PlaceItem;

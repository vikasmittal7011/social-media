import React from "react";

function UserItem(props) {
  const { name, image, placesCount } = props;
  return (
    <div className="col-md-4">
      <div className="card text-dark">
        <img src={image} className="card-img" alt={name} />
        <div className="card-img-overlay">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {placesCount} {placesCount === 1 ? "Place" : "Places"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserItem;

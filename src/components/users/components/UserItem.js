import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserItem(props) {
  const { api } = useSelector((state) => state);
  const { id, name, image, placesCount } = props;
  return (
    <div className="container rounded-5" style={{ width: "25rem" }}>
      <Link to={`/${id}/places`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`${api}${image}`}
                className="img-fluid rounded-circle m-2 ms-5"
                alt={name}
                style={{ maxWidth: "120px", height: "110px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body ms-5">
                <h3 className="card-title">{name}</h3>
                <h4 className="card-text">
                  {placesCount} {placesCount <= 1 ? "Place" : "Places"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserItem;

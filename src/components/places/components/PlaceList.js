import React from "react";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";

function PlaceList(props) {
  const navigate = useNavigate();
  const { places } = props;
  const { findedPlaces, success } = places;

  if (!success) {
    return (
      <div className="container text-center">
        <h1 className="mb-3">No places found. Do you want add one?</h1>
        <Button
          name="Add"
          type="success"
          onClick={() => {
            navigate("/places/addPlace");
          }}
        />
      </div>
    );
  }

  return (
    places && (
      <div className="container" style={{ width: "40vw" }}>
        {findedPlaces.map((place) => (
          <PlaceItem key={place._id} singlePlace={place} />
        ))}
      </div>
    )
  );
}

export default PlaceList;

import React from "react";
import PlaceItem from "./PlaceItem";

function PlaceList(props) {
  const { places } = props;
  const { findedPlaces, success } = places;

  if (!success) {
    return (
      <div className="container text-center">
        <h1>No places found. Do you want add one?</h1>
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

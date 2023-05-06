import React from "react";
import PlaceItem from "./PlaceItem";

function PlaceList(props) {
  const { places } = props;

  if (places.length === 0) {
    return (
      <div className="container text-center">
        <h1>No places found. Do you want add one?</h1>
      </div>
    );
  }

  return (
    <div className="container" style={{ width: "40vw" }}>
      {places.map((place) => (
        <PlaceItem key={place.id} singlePlace={place} />
      ))}
    </div>
  );
}

export default PlaceList;

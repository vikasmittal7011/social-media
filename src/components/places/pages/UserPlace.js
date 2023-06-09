import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

import Loading from "../../shared/components/Loading";
import { useHttpClient } from "../../../hooks/fetchCall";
function UserPlace() {
  const [placeOfUser, setPlaceOfUser] = useState(null);

  const { loading, sendRequest } = useHttpClient();

  let userID = useParams().userID;

  useEffect(() => {
    const getUserPlaces = async () => {
      try {
        const response = await sendRequest(`api/places/users/${userID}`);
        const places = await response;
        setPlaceOfUser(places);
      } catch (err) {}
    };
    getUserPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !placeOfUser) {
    return <Loading />;
  }

  return (
    <div className="container">
      {!loading && placeOfUser && <PlaceList places={placeOfUser} />}
    </div>
  );
}

export default UserPlace;

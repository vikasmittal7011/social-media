import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

function UserPlace(props) {
  const userID = useParams().userID;
  const demoPlaces = [
    {
      id: "p1",
      title: "Red Fort",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8LcGbb_GcSH4dmWuiHPJY0C-U7KZ0-QXMA&usqp=CAU      ",
      descrition:
        "17th-century Mughal fortress built in towering red sandstone, now a complex of museums.",
      address:
        "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
      userID: "1",
    },
    {
      id: "p2",
      title: "Taj Mehel",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0YT7qpsWzJh6MEbQ39K_Zuaqw2_FEEVSdQ&usqp=CAU",
      descrition:
        "17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
      userID: "2",
    },
  ];

  const userIdPlaces = demoPlaces.filter((place) => {
    return place.userID === userID;
  });

  return (
    <div className="container">
      <PlaceList places={userIdPlaces} />
    </div>
  );
}

export default UserPlace;

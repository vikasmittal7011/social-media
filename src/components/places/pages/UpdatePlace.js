import React from "react";
import { useParams } from "react-router-dom";
import FormButton from "../../shared/components/FormButton";
import Input from "../../shared/components/Input";
import { useCallback } from "react";
import { useState } from "react";

function UpdatePlace() {
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
  const placeId = useParams().placeId;

  const editPlace = demoPlaces.find((place) => place.id === placeId);

  const [updatePlace, setUpdatePlace] = useState(editPlace);

  const [isFormValid, setIsFormvalid] = useState(true);

  const handleTitleChange = useCallback(
    (title, id) => {
      setUpdatePlace({
        ...updatePlace,
        [id]: title,
      });
      checkValid(title, updatePlace.descrition);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editPlace]
  );

  const handleDesChange = useCallback(
    (des, id) => {
      setUpdatePlace({
        ...updatePlace,
        [id]: des,
      });
      checkValid(updatePlace.title, des);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editPlace]
  );

  const checkValid = (title, des) => {
    if (title > 3 && des > 5) {
      setIsFormvalid(true);
    } else {
      setIsFormvalid(false);
    }
  };

  return (
    <div className="container" style={{ width: "70vw" }}>
      <h2 className="text-center">Update Place Here!!! </h2>
      <form>
        <Input
          title="Name of Place"
          id="title"
          type="text"
          placeholder="Enter name of place"
          required={true}
          value={editPlace.title}
          onInput={handleTitleChange}
        />
        <Input
          title="Descrition"
          id="descrition"
          type="text"
          placeholder="Write somthing about it..."
          required={true}
          value={editPlace.descrition}
          textarea={true}
          onInput={handleDesChange}
        />
        <FormButton name="Update Place" type="primary" activate={isFormValid} />
      </form>
    </div>
  );
}

export default UpdatePlace;

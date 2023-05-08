import React from "react";

import FormButton from "../../shared/components/FormButton";
// const demoPlaces = [
//   {
//     id: "p1",
//     title: "Red Fort",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8LcGbb_GcSH4dmWuiHPJY0C-U7KZ0-QXMA&usqp=CAU      ",
//     descrition: "A old age for fort",
//     address:
//       "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
//     loaction: {
//       len: 28.6568928,
//       ge: 77.2355361,
//     },
//     userID: "1",
//   },
//   {
//     id: "p2",
//     title: "Taj Mehel",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0YT7qpsWzJh6MEbQ39K_Zuaqw2_FEEVSdQ&usqp=CAU",
//     descrition:
//       "17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.",
//     address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
//     loaction: {
//       len: 27.1751448,
//       ge: 78.0318425,
//     },
//     userID: "2",
//   },
// ];

function UpdatePlace() {
  return (
    <div className="container" style={{ width: "70vw" }}>
      <h2 className="text-center">Update Place Here!!! </h2>
      <form>
        <FormButton name="Update Place" type="primary" activate={false} />
      </form>
    </div>
  );
}

export default UpdatePlace;

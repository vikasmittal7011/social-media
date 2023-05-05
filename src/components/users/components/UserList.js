import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
  const { usersList } = props;
  return (
    <>
      <div className="container mt-3">
        {usersList.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.img}
              placesCount={user.places}
            />
          );
        })}
      </div>
    </>
  );
}

export default UserList;

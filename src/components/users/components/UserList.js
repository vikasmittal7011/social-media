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
              key={user._id}
              id={user._id}
              name={user.name}
              image={user.image}
              placesCount={user.places.length}
            />
          );
        })}
      </div>
    </>
  );
}

export default UserList;

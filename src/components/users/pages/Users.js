import React from "react";
import demoUser from "../demoUser"
import UserList from "../components/UserList";

function Users() {
    const USERS = demoUser;
  return <UserList usersList={USERS}></UserList>;
}

export default Users;

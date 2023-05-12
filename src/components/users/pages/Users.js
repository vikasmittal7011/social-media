import React from "react";
import { useSelector } from "react-redux";
import demoUser from "../demoUser";
import UserList from "../components/UserList";
import Loading from "../../shared/components/Loading";

function Users() {
  const loading = useSelector((state) => state.loading);
  const USERS = demoUser;
  if (loading) {
    return <Loading />;
  }
  return <UserList usersList={USERS}></UserList>;
}

export default Users;

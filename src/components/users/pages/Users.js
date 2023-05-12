import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import demoUser from "../demoUser";
import UserList from "../components/UserList";
import Loading from "../../shared/components/Loading";

const Users = () => {
  const { api } = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${api}api/users`);
      const jsonData = await response.json();
      setLoading(false);
      setUserDetails(jsonData);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const USERS = demoUser;
  if (loading || !userDetails) {
    return <Loading />;
  }

  return userDetails && <UserList usersList={USERS}></UserList>;
};

export default Users;

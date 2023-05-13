import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import Loading from "../../shared/components/Loading";
import { useHttpClient } from "../../../hooks/fetchCall";

const Users = () => {
  const [userDetails, setUserDetails] = useState();

  const { loading, sendRequest } = useHttpClient();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await sendRequest(`api/users`);
        const jsonData = await response;
        setUserDetails(jsonData.users);
        return;
      } catch (err) {}
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || !userDetails) {
    return <Loading />;
  }

  return (
    userDetails && !loading && <UserList usersList={userDetails}></UserList>
  );
};

export default Users;

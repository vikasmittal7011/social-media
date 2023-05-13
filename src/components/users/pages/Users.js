import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
import Loading from "../../shared/components/Loading";

const Users = () => {
  const { api } = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${api}api/users`);
        const jsonData = await response.json();
        setLoading(false);
        setUserDetails(jsonData.users);
        return;
      } catch (err) {
        console.log(err);
      }
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

import React, { useEffect } from "react";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddPlaces() {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state);
  const { userId } = userLogin;
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  return (
    <div className="container my-3" style={{ width: "70vw" }}>
      <h2 className="text-center my-2">Add New Place Here</h2>
      <Form />
    </div>
  );
}

export default AddPlaces;

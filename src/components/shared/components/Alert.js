import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const alertState = useSelector((state) => state.alert);
  return (
    alertState && (
      <div
        className={`alert alert-${alertState.type.toLowerCase()} alert-dismissible fade show fixed-top`}
        role="alert"
        style={{ margin: "3.5rem" }}
      >
        <strong>{alertState.type}</strong> : {alertState.message}
      </div>
    )
  );
};

export default Alert;

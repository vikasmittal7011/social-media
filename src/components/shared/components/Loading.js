import React from "react";
import loading from "../images/loading.gif";
function Loading() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
}

export default Loading;

import React from "react";

function Button(props) {
  const { name, type, onClick, outline } = props;
  if (outline === true) {
    return (
      <button className={`btn btn-outline-${type} mx-1`} onClick={onClick}>
        {name}
      </button>
    );
  }
  return (
    <button className={`btn btn-${type} mx-2`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

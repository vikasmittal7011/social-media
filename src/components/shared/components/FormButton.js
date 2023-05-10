import React from "react";

function FormButton(props) {
  const { name, type, onClick, outline, activate } = props;
  if (outline === true) {
    return (
      <button
        type="submit"
        disabled={!activate}
        className={`btn btn-outline-${type} mx-1`}
        onClick={onClick}
      >
        {name}
      </button>
    );
  }
  return (
    <button
      type="submit"
      disabled={!activate}
      className={`btn btn-${type} mx-2`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default FormButton;

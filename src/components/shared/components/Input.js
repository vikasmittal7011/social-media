import React from "react";

function Input(props) {
  const { title, id, name, type, placeholder, textarea, row, required } = props;

  const inputTag = !textarea ? (
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  ) : (
    <textarea
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      rows={row || 3}
      required={required}
    />
  );

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {title}
      </label>
      {inputTag}
    </div>
  );
}

export default Input;

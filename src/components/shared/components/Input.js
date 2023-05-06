import React from "react";

function Input(props) {
  const {
    title,
    id,
    name,
    type,
    placeholder,
    textarea,
    row,
    required,
    onInput,
  } = props;

  const handleChnage = (event) => {
    onInput(event.target.value, id);
  };

  const inputTag = !textarea ? (
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={handleChnage}
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
      onChange={handleChnage}
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

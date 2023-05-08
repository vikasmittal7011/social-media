import React from "react";

function Input(props) {
  const {
    title,
    id,
    type,
    placeholder,
    textarea,
    row,
    required,
    onInput,
    value,
  } = props;

  const handleChnage = (event) => {
    onInput(event.target.value, id);
  };

  const inputTag = !textarea ? (
    <input
      type={type}
      className="form-control"
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      onChange={handleChnage}
      value={value}
    />
  ) : (
    <textarea
      type={type}
      className="form-control"
      id={id}
      name={id}
      placeholder={placeholder}
      rows={row || 3}
      required={required}
      onChange={handleChnage}
      value={value}
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

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Input(props) {
  const { title, id, type, placeholder, textarea, row, required, onInput } =
    props;
  const [inputValue, setValue] = useState("");
  const handleChnage = (event) => {
    setValue(event.target.value);
    onInput(event.target.value, id);
  };

  useEffect(() => {
    setValue(props.value || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputTag = !textarea ? (
    <input
      type={type}
      className="form-control"
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      onChange={handleChnage}
      value={inputValue}
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
      value={inputValue}
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

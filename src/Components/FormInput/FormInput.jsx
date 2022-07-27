import React from "react";

import "./FormInput.css";
const FormInput = ({
  onFocus,
  onBlur,
  onChangeHandler,
  name,
  type,
  accept,
}) => {
  return (
    <div onFocus={(e) => onFocus(e)} onBlur={(e) => onBlur(e)}>
      <div className="helper">
        Enter {name.charAt(0).toUpperCase() + name.slice(1)} Here ...
      </div>
      <input
        name={name}
        type={type || "text"}
        accept={type === "file" ? accept : type}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
    </div>
  );
};

export default FormInput;

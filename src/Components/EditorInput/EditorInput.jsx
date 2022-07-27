import React from "react";

import "./EditorInput.css";
const EditorInput = ({ type, name, onChange, accept }) => {
  return (
    <input
      type={type || "text"}
      name={name}
      onChange={(e) => onChange(e)}
      accept={accept || "text"}
      placeholder={`Enter ${name}`}
    />
  );
};

export default EditorInput;

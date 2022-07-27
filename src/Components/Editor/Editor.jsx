import React, { useEffect, useState } from "react";

import "./Editor.css";

const Editor = ({ onEdit, setIsEditorActive }) => {
  const [formData, setFormData] = useState({});
  // const containerRef = React.createRef();
  useEffect(() => {
    // setTimeout(() => {
    //   containerRef.current.style.width = "30vw";
    //   containerRef.current.style.height = "60vh";
    // }, 300);
  });
  const editorChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandeler = (e) => {
    e.preventDefault();
    onEdit(formData);
    setIsEditorActive(false);
  };
  const imageChangeHandler = (e) => {
    setFormData({
      ...formData,
      userImg: e.target.files[0],
    });
  };
  return (
    <div className="editor-container">
      <div
        className="overlayAbsoulte"
        onClick={() => setIsEditorActive(false)}
      ></div>
      <div
        className="editor-center"
        // ref={containerRef}
        onClick={() => setIsEditorActive(true)}
      >
        <form
          action="#"
          onSubmit={(e) => onSubmitHandeler(e)}
          onClick={() => setIsEditorActive(true)}
        >
          <input
            type="text"
            name="name"
            onChange={(e) => editorChangeHandler(e)}
            placeholder="Enter Name"
          />
          <input
            type="text"
            name="phone"
            onChange={(e) => editorChangeHandler(e)}
            placeholder="Enter Phone"
          />
          <input
            type="text"
            name="email"
            onChange={(e) => editorChangeHandler(e)}
            placeholder="Enter Email"
          />
          <input
            type="text"
            name="rel"
            onChange={(e) => editorChangeHandler(e)}
            placeholder="Enter Rel"
          />
          <input
            type="file"
            name="userImg"
            accept=".jpeg , .png , .jpg"
            onChange={(e) => imageChangeHandler(e)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Editor;

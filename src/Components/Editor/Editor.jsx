import React, { useEffect, useState } from "react";
import EditorInput from "../EditorInput/EditorInput";

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
          <EditorInput name="name" onChange={(e) => editorChangeHandler(e)} />
          <EditorInput name="phone" onChange={(e) => editorChangeHandler(e)} />
          <EditorInput name="email" onChange={(e) => editorChangeHandler(e)} />
          <EditorInput name="rel" onChange={(e) => editorChangeHandler(e)} />
          <EditorInput
            name="userImg"
            accept={".jpeg , .png , .jpg"}
            type={"file"}
            onChange={(e) => imageChangeHandler(e)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Editor;

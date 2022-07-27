import React from "react";

import "./ContactShower.css";

const ContactShower = ({
  data: { id, name, phone, email, rel, userImg },
  setNodeId,
  onDeleteHandler,
  setIsEditorActive,
}) => {
  return (
    <div className="contact" id={id}>
      <p>
        Name : <span>{name}</span>
      </p>
      <p>
        Phone : <span>{phone}</span>
      </p>
      <p>
        Email : <span>{email}</span>
      </p>
      <p>
        Rel : <span>{rel}</span>
      </p>
      <img src={URL.createObjectURL(userImg)} alt={`p For ${name}`} />
      <button
        className="delete-btn"
        onClick={() => {
          setNodeId(id);
          onDeleteHandler(id);
        }}
      >
        delete
      </button>
      <button
        className="edit-btn"
        onClick={() => {
          setNodeId(id);
          return setIsEditorActive(true);
        }}
      >
        edit
      </button>
    </div>
  );
};

export default ContactShower;

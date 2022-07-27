import React, { useState } from "react";

import "./App.css";
import ContactShowercc from "./Components/ContactShower/ContactShower";
import Editor from "./Components/Editor/Editor";
import FormInput from "./Components/FormInput/FormInput";

const App = () => {
  //const formRef = React.createRef();

  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState({});
  const [selectedNodeId, setSelectedNodeId] = useState("");
  const [isEditorActive, setIsEditorActive] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault();
    setContacts((prevState) => [
      ...prevState,

      /* Make UNIQUE KEY !!!! */
      {
        ...user,
        id: `item--${Math.random() * 10000}--${new Date().getMilliseconds()}`,
      },
      /* Make UNIQUE KEY !!!! */
    ]);

    return setUser({});
  };
  const onIpnutsFocusEventHandler = (e) => {
    e.target.parentElement.children[0].classList.add("active");
  };
  const onInputBlurEventHandler = (e) => {
    if (e.target.value.length < 3) {
      e.target.parentElement.children[0].classList.add("error");
      return e.target.parentElement.children[0].innerText = "Fill It"
    } else {
      e.target.parentElement.children[0].classList.remove("error");
      e.target.parentElement.children[0].classList.remove("active");
      e.target.parentElement.children[0].classList.add("ok");
      e.target.parentElement.children[0].innerText = "";
    }
  };
  const deleteHandler = (selectedId) => {
    const copyOfState = [...contacts];
    const contactsNew = copyOfState.filter((item) => item.id !== selectedId);
    setContacts(() => [...contactsNew]);
  };
  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const imageHandler = (e) => {
    setUser({ ...user, userImg: (e.target.files[0]) || "" })
  }
  const onEdit = (formData) => {
    const copyOfState = [...contacts]
    const selectedIndex = copyOfState.findIndex((item) => {
      return item.id === selectedNodeId
    })
    copyOfState[selectedIndex].name = formData.name
    copyOfState[selectedIndex].phone = formData.phone
    copyOfState[selectedIndex].email = formData.email
    copyOfState[selectedIndex].rel = formData.rel
    copyOfState[selectedIndex].userImg = formData.userImg
    setContacts(copyOfState)
  }
  return (
    <div className="main-container">
      <form onSubmit={(e) => onSubmit(e)} >
        <FormInput onFocus={(e) => onInputBlurEventHandler(e)}
          onBlur={(e) => onInputBlurEventHandler(e)}
          onChangeHandler={(e) => { onChangeHandler(e) }}
          name={"name"}
          type="text"
        />

        <FormInput onFocus={(e) => onInputBlurEventHandler(e)}
          onBlur={(e) => onInputBlurEventHandler(e)}
          onChangeHandler={(e) => { onChangeHandler(e) }}
          name={"phone"}
          type="number"
        />
        <FormInput onFocus={(e) => onInputBlurEventHandler(e)}
          onBlur={(e) => onInputBlurEventHandler(e)}
          onChangeHandler={(e) => { onChangeHandler(e) }}
          name={"email"}
          type="text"
        />
        <FormInput onFocus={(e) => onInputBlurEventHandler(e)}
          onBlur={(e) => onInputBlurEventHandler(e)}
          onChangeHandler={(e) => { onChangeHandler(e) }}
          name={"rel"}
          type="text"
        />
        <input type="file" name="userImg" accept=".jpeg , .png , .jpg" onChange={(e) => {

          imageHandler(e)
        }

        } />
        <div className="btn-container">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>

      {contacts.map((item) => {
        return (
          <ContactShowercc
            key={item.id}
            data={item}
            setNodeId={setSelectedNodeId}
            onDeleteHandler={deleteHandler}
            setIsEditorActive={setIsEditorActive}
          />
        );
      })}
      {isEditorActive && <Editor onEdit={onEdit}
        setIsEditorActive={setIsEditorActive}
      />}
    </div>
  );
};

export default App;
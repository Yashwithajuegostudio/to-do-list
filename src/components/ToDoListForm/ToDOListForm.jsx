import React, { useState } from "react";
import { title } from "../../utils/constant";

import Form from "../Form/Form";

function ToDOListForm({ addItem }) {
  const [userInput, setUserInput] = useState("");

  // add button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(userInput);
    setUserInput("");
  };
  return (
    <Form
      btnTitle={title.AddBtnTitle}
      handleSubmit={handleSubmit}
      userInput={userInput}
      setUserInput={setUserInput}
    />
  );
}

export default ToDOListForm;

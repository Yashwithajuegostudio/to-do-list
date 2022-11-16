import React, { useState } from "react";
import { TITLE } from "../../utils/constant";

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
      btnTitle={TITLE.addBtnTitle}
      handleSubmit={handleSubmit}
      userInput={userInput}
      setUserInput={setUserInput}
    />
  );
}

export default ToDOListForm;

import React, { useState } from "react";
import "./Style.css";

function TodoForm(props) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    props.onSubmit(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="input-field">
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

import React, { useState } from "react";
import "./Style.css";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.task);
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteClick = () => {
    props.onDelete(props.todo.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditValue(props.task);
  };

  const handleSaveClick = () => {
    props.onEdit(props.todo.id, editValue);
    setIsEditing(false);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(true);
  };

  const viewTemplate = (
    <div className="task-view">
      <div className={`task-text ${isChecked ? "completed" : ""}`}>
        {props.todo.text}
      </div>
      <div className="task-buttons">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );

  const editTemplate = (
    <div className="task-edit">
      <input type="text" value={editValue} onChange={handleEditChange} />
      <div className="task-buttons">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );

  return isEditing ? editTemplate : viewTemplate;
}

export default TodoItem;

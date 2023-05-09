import React, { useState } from "react";
import "./Style.css";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.task);

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
    props.onToggleCompleted(props.todo.id);
  };

  const viewTemplate = (
    <div className="task-view">
      <div className={`task-text ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </div>
      <div className="task-buttons">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );

  const editTemplate = (
    <div className="task-edit">
      <input
        type="text"
        value={editValue}
        onChange={handleEditChange}
        required
      />
      <div className="task-buttons">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );

  return isEditing ? editTemplate : viewTemplate;
}

export default TodoItem;

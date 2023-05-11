import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  const [todos, setTodos] = useState([]);

  function isDuplicate(text, todos) {
    if (!text || typeof text !== "string") {
      return false;
    }
    const normalizedText = text.trim().toLowerCase();
    return todos.some(
      (todo) => todo.text.trim().toLowerCase() === normalizedText
    );
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleSubmit = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return;
    }
    if (isDuplicate(trimmedText, todos)) {
      alert("This post already exists");
      return;
    }
    const newTodo = {
      id: Math.random(),
      text: trimmedText,
      completed: false,
      dateAdded: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const handleEdit = (id, newText) => {
    if (!newText.trim()) {
      return;
    }
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <h1 className="header">Todo List</h1>
      <TodoSummary todos={todos} />
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
}

export default App;

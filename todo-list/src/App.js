import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (text) => {
    const newTodo = {
      id: Math.random(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Header />
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;

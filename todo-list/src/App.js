import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoSummary from "./components/TodoSummary/TodoSummary";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (text) => {
    const newTodo = {
      id: Math.random(),
      text: text,
      completed: false,
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

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <Header />
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

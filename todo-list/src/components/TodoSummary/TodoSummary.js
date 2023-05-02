import "./Style.css";

function TodoSummary(props) {
  const todosCount = props.todos.length;
  const completedCount = props.todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-summary">
      <p>Tasks: {todosCount}</p>
      <p>Completed: {completedCount}</p>
    </div>
  );
}

export default TodoSummary;

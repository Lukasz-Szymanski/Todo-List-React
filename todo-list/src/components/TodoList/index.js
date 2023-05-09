import TodoItem from "../TodoItem";
import "./Style.css";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          task={todo.text}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
          onToggleCompleted={props.onToggleCompleted}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;

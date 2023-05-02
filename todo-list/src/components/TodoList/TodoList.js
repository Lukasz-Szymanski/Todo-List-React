import TodoItem from "../TodoItem/TodoItem";
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
        />
      ))}
    </div>
  );
}

export default TodoList;

import React from "react";

const Todo = ({ todo, handleRemoveTodo, handleSetDoneTodo }) => (
    <li className="list-group-item">
        <span
            className={todo.isDone ? "todo-done" : ""}
            onClick={() => handleSetDoneTodo(todo.id)}
        >
            {todo.isDone ? "👍" : "🔥"} {todo.name}
        </span>
        <button onClick={() => handleRemoveTodo(todo.id)}>DEL</button>
    </li>
);

export default Todo;

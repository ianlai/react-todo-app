import React from "react";
import { TodoType } from "./types";

interface TodoProps {
    todo: TodoType;
    handleRemoveTodo: (id: number) => void;
    handleSetDoneTodo: (id: number) => void;
}

const Todo = (props: TodoProps) => (
    <li className="list-group-item">
        <span
            className={props.todo.isDone ? "todo-done" : ""}
            onClick={() => props.handleSetDoneTodo(props.todo.id)}
        >
            {props.todo.isDone ? "👍" : "🔥"} {props.todo.name}
        </span>
        <button onClick={() => props.handleRemoveTodo(props.todo.id)}>DEL</button>
    </li>
);

export default Todo;

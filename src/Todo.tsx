import React from "react";

interface TodoProps {
    todo: Todo;
    handleRemoveTodo: (id: number) => void;
    handleSetDoneTodo: (id: number) => void;
}

interface Todo{
    id: number;
    name: string;
    isDone: boolean;
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

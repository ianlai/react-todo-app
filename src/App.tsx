import React, { KeyboardEvent, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import Button from "./Button";
import Clock from "./Clock";
import Counter from "./Counter";

interface AppProps {}
interface AppState {
    text: string
    todos: TodoType[]
    globalId: number
    numOfDone: number
    numOfUndone: number 
}
interface TodoType{
    id: number;
    name: string;
    isDone: boolean;
}

class App extends React.Component<AppProps, AppState> {
    initState = {
        text: "",
        todos: [
            { id: 1, name: "Clean the house", isDone: false },
            { id: 2, name: "Learn React", isDone: false },
            { id: 3, name: "Buy groceries ", isDone: true }
        ],
        globalId: 4,
        numOfDone: 1,
        numOfUndone: 2
    };
    constructor(props: AppProps) {
        super(props);
        this.state = this.initState;
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSort = this.handleClickSort.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.handleInboxKeyPress = this.handleInboxKeyPress.bind(this);
        this.handleInboxChange = this.handleInboxChange.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleSetDoneTodo = this.handleSetDoneTodo.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    }
    reset() {
        this.setState(this.initState);
    }
    componentDidMount() {
        let globalId = parseInt(localStorage.getItem("globalId") || '{}');
        let todos = JSON.parse(localStorage.getItem("todos") || '{}');  //getItem returns string or null
        console.log(todos);
        if (todos !== null) {
            this.setState({
                todos: todos,
                globalId: globalId
            });
        }
    }
    componentDidUpdate() {
        this.saveToLocalStorage();
    }
    handleInboxKeyPress(e: KeyboardEvent) {
        if (e.key === "Enter") {
            this.handleClickAdd();
        }
    }
    handleInboxChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            text: e.target.value
        });
    }
    handleClickAdd() {
        let { todos, text, globalId } = this.state;
        const newId = globalId++;
        this.setState({
            text: "",
            todos: [
                ...this.state.todos,
                { id: newId, name: text, isDone: false }
            ],
            globalId
        });
    }
    handleClickSort() {
        let { todos } = this.state;
        let undoneTodos = todos.filter(t => t.isDone === false);
        let sortedTodos = undoneTodos.concat(
            todos.filter(t => t.isDone === true)
        );
        this.setState({
            todos: sortedTodos
        });
    }
    handleClickReset() {
        this.reset();
    }
    handleRemoveTodo(id: number) {
        const { todos } = this.state;
        let newTodos = todos.filter(t => t.id !== id);
        this.setState({
            todos: newTodos
        });
    }
    handleSetDoneTodo(id: number) {
        const { todos } = this.state;
        let newTodos = todos.map(t => {
            if (t.id === id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({
            todos: newTodos
        });
    }
    saveToLocalStorage() {
        const { todos, globalId } = this.state;
        localStorage.clear();
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("globalId", globalId.toString());
    }
    render() {
        const { todos, text } = this.state;
        return (
            <div className="container">
                <h1 className="header">React Todo App</h1>
                
                <div className="subcontainer">
                    <div className="countdown-container">
                        <span>You still have</span>
                        <Clock />
                        <span>for today to clear them all :)</span>
                    </div>
                    <Counter/>
                </div>

                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-lg"
                        >
                            New Todo:
                        </span>
                    </div>
                    <input
                        type="text"
                        className="input-box"
                        placeholder=" Press enter to add"
                        value={text}
                        onChange={this.handleInboxChange}
                        onKeyPress={this.handleInboxKeyPress}
                    />
                    <div className="input-group-append">
                        <Button name="Add" type="" onClick={this.handleClickAdd} />
                        <Button name="Sort" type="" onClick={this.handleClickSort} />
                        <Button name="Reset" type="reset" onClick={this.handleClickReset} />
                    </div>
                </div>

                <ul className="list-group">
                    {todos.map(t => (
                        <Todo
                            key={t.id}
                            todo={t}
                            handleRemoveTodo={this.handleRemoveTodo}
                            handleSetDoneTodo={this.handleSetDoneTodo}
                        />
                    ))}
                </ul>

            </div>
        );
    }
}

export default App;

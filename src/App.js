import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import Button from './Button'
import Clock from './Clock'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            todos:[
                {id: 1, name: 'Clean house', isDone: false},
                {id: 2, name: 'Read a book', isDone: false},
                {id: 3, name: 'Go shopping', isDone: true}
            ],
            globalId: 4
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSort = this.handleClickSort.bind(this);
        this.handleInboxKeyPress = this.handleInboxKeyPress.bind(this);
        this.handleInboxChange = this.handleInboxChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.setDoneTodo = this.setDoneTodo.bind(this);
        this.saveToLocalStoreage = this.saveToLocalStoreage.bind(this);
    }
    componentWillMount() {
        let globalId = localStorage.getItem("globalId");
        let todos = JSON.parse(localStorage.getItem("todos"));
        console.log(todos);
        this.setState({
            todos: todos,
            globalId: globalId
        });
    }
    componentWillUnmount() {
        
    }
    handleInboxKeyPress(e){
        if(e.key === 'Enter'){
            this.handleClickAdd();
        }
    }
    handleInboxChange(e){
        this.setState({
            text: e.target.value
        })
    }
    handleClickAdd(){
        let {todos, text, globalId} = this.state;
        const newId =  globalId++;
        this.setState({
            text: '',
            todos: [
                ...this.state.todos, 
                {id: newId, name: text, isDone: false}
            ],
            globalId
        })
    }
    handleClickSort(){
        let {todos} = this.state;
        let undoneTodos = todos.filter((t) => t.isDone === false);
        let sortedTodos = undoneTodos.concat(todos.filter((t) => t.isDone === true));

        this.setState({
            todos: sortedTodos
        })
    }
    removeTodo(id){
        const {todos} = this.state;
        let newTodos = todos.filter((t) => t.id !== id);
        this.setState({
            todos: newTodos
        });
    }
    setDoneTodo(id){
        const {todos} = this.state;
        let newTodos = todos.map((t) => {
            if(t.id === id){
                t.isDone = !t.isDone;
            }
            return t
        });
        this.setState({
            todos: newTodos
        });
    }
    saveToLocalStoreage(){
        const {todos, globalId} = this.state;
        localStorage.clear();
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("globalId", globalId);
    }
    render() {
        this.saveToLocalStoreage();
        const {todos, text} = this.state;
        
        return (
            <div className="container">
                <h1 className="header">React Todo App</h1>
                
                <div className="countdown-container">
                    <span>You still have</span>
                    <Clock/>
                    <span>for today to clear them all :)</span>
                </div>

                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">New Todo:</span>
                    </div>
                    <input type="text" className = "input-box" placeholder=" Press enter to add"
                    value={text} onChange={this.handleInboxChange} onKeyPress={this.handleInboxKeyPress}/>
                    <div className="input-group-append">
                        <Button name='Add' onClick={this.handleClickAdd}/>
                        <Button name='Sort' onClick={this.handleClickSort}/>
                    </div>
                </div>

                <ul className="list-group">
                    {
                        todos.map(
                            t => <Todo todo={t} remove={this.removeTodo} setDone={this.setDoneTodo}/>
                        )
                    }
                </ul>
            </div>
        )
    }
  }

export default App;

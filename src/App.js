import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import Button from './Button'
import Clock from './Clock'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text: '',
            todos:[
                {id: 1, name: 'Clean the house', isDone: false},
                {id: 2, name: 'Learn React', isDone: false},
                {id: 3, name: 'Buy groceries ', isDone: true}
            ],
            globalId: 4
        }
    
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSort = this.handleClickSort.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.handleInboxKeyPress = this.handleInboxKeyPress.bind(this);
        this.handleInboxChange = this.handleInboxChange.bind(this);
        this.callbackRemoveTodo = this.callbackRemoveTodo.bind(this);
        this.callbackSetDoneTodo = this.callbackSetDoneTodo.bind(this);
        this.saveToLocalStoreage = this.saveToLocalStoreage.bind(this);
    }
    reset(){
        this.setState({
            text: '',
            todos:[
                {id: 1, name: 'Clean the house', isDone: false},
                {id: 2, name: 'Learn React', isDone: false},
                {id: 3, name: 'Buy groceries ', isDone: true}
            ],
            globalId: 4
        });
    }
    componentWillMount() {
        let globalId = localStorage.getItem("globalId");
        let todos = JSON.parse(localStorage.getItem("todos"));
        console.log(todos);
        if(todos !== null)
        {
            this.setState({
                todos: todos,
                globalId: globalId
            });
        }
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
    handleClickReset(){
        this.reset();
    }
    callbackRemoveTodo(id){
        const {todos} = this.state;
        let newTodos = todos.filter((t) => t.id !== id);
        this.setState({
            todos: newTodos
        });
    }
    callbackSetDoneTodo(id){
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
        console.log(todos);
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
                        <Button name='Reset' id="reset-button" onClick={this.handleClickReset}/>
                    </div>
                </div>

                <ul className="list-group">
                    {
                        todos.map(
                            t => <Todo key={t.id} todo={t} remove={this.callbackRemoveTodo} setDone={this.callbackSetDoneTodo}/>
                        )
                    }
                </ul>
            </div>
        )
    }
  }

export default App;

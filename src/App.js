import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'


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
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.setDoneTodo = this.setDoneTodo.bind(this);
    }

    onChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onClick(){
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

    removeTodo(id){
        let {todos} = this.state;
        let newTodos = todos.filter((t) => t.id !== id);
        this.setState({
            todos: newTodos
        });
    }

    setDoneTodo(id){
        let {todos} = this.state;
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
    
    render() {
        const {todos, text} = this.state;

        return (
            <div className="container">
                <h1 className="header">React Todo App</h1>

                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">New Todo:</span>
                    </div>
                    <input type="text" className = "input-box"
                    value={text} onChange={this.onChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onClick}>+</button>
                    </div>
                </div>

                <ul className="list-group">
                    {
                        todos.map(
                            t => 
                            <Todo id={t.id} name={t.name} isDone={t.isDone} 
                            remove={this.removeTodo} setDone={this.setDoneTodo}/>
                        )
                    }
                </ul>
            </div>
        )
    }
  }

export default App;

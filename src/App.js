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
            ]
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
        let {todos, text} = this.state;
        const newId = todos.length + 1;
        this.setState({
            text: '',
            todos: [
                ...this.state.todos, 
                {id: newId, name: text, isDone: false}
            ]
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
            <div>
                <h1>Todo App</h1>
                <input value={text} onChange={this.onChange}/>
                <button onClick={this.onClick}>
                    Add item
                </button>
                <ul>
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

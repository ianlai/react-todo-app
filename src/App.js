import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {id: 1, name: 'Clean house', isDone: false},
                {id: 2, name: 'Read a book', isDone: false},
                {id: 3, name: 'Go shopping', isDone: true}
            ]
        }
    }
    
    render() {
        const {todos} = this.state;

        return (
            <div>
                <h1>Todo App</h1>
                <ul>
                    {
                        todos.map(
                            t => 
                            <Todo id={t.id} name={t.name} isDone={t.isDone} />
                        )
                    }
                </ul>
            </div>
        )
    }
  }

export default App;

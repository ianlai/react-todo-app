import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.remove = this.remove.bind(this);
        this.setDone = this.setDone.bind(this);
    }

    setDone(){
        this.props.setDone(this.props.todo.id);
    }

    remove(){
        this.props.remove(this.props.todo.id);
    }

    render(){
        const {todo} = this.props;
        return (
            <li className="list-group-item"> 
                <span className = {todo.isDone ? "todo-done" : ""} onClick={this.setDone}>
                    [{todo.id}] {todo.name}
                </span>
                <button onClick={this.remove}>DEL</button>     
            </li>
        )
    }
}

export default Todo;
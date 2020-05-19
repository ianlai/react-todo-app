import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.remove = this.remove.bind(this);
        this.setDone = this.setDone.bind(this);
    }

    setDone(){
        this.props.setDone(this.props.id);
    }

    remove(){
        this.props.remove(this.props.id);
    }

    render(){
        const {id, name, isDone} = this.props;
        return (
            <li className="list-group-item"> 
                <span className = {isDone ? "todo-done" : ""} onClick={this.setDone}>
                    [{id}] {name}
                </span>
                <button onClick={this.remove}>DEL</button>     
            </li>
        )
    }
}

export default Todo;
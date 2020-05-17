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
            <div className = "todo-item">
                <li className="list-group-item"> 
                    <span className ="todo-item">
                        [{id}] {name} ----- {isDone ? "O" : "X"}
                    </span>
                    <button className = "todo-button" onClick={this.setDone}>Done</button> 
                    <button className = "todo-button" onClick={this.remove}>Delete</button>     
                </li>
                
            </div>
        )
    }
}

export default Todo;
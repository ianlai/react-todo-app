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
            <div>
                <li>
                    id:{id} ------ name: {name} ----- {isDone ? "O" : "X"}
                </li>
                <button onClick={this.remove}>
                    Delete
                </button>
                <button onClick={this.setDone}>
                    Done
                </button>
            </div>
        )
    }
}

export default Todo;
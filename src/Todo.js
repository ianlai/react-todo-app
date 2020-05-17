import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.remove = this.remove.bind(this);
    }

    remove(){
        this.props.remove(this.props.id);
    }

    render(){
        const {id, name, isDone} = this.props;
        return (
            <div>
                <li>
                    id:{id} -- name: {name} -- {isDone ? "OK" : "Not Yet"}
                </li>
                <button onClick={this.remove}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Todo;
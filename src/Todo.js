import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {id, name, isDone} = this.props;
        return (
            <div>
                <li>
                    id:{id} -- name: {name} -- {isDone ? "OK" : "Not Yet"}
                </li>
            </div>
        )
    }
}

export default Todo;
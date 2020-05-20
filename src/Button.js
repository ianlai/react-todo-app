import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick();
    }

    render(){
        const {name} = this.props;
        return (
            <button className="btn btn-outline-secondary own-button" type="button"
            onClick={this.handleClick}>
                {name}
            </button>
        )
    }
}

export default Button;
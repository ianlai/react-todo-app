import React, { Component } from "react";

interface ButtonProps {
    name: string;
    type: string;
    onClick: () => void;
  }

//================================ 
// Functional component with TypeScript
//================================ 
// const Button = (props: ButtonProps) => {
//     const handleClick = () => {
//         props.onClick();
//     }
    
//     return (
//         <button 
//             className={`btn btn-outline-secondary own-button ${props.type}`}
//             onClick={handleClick}>
//             {props.name}
//         </button>
//     );
// };

//================================ 
//Class component with TypeScript
//================================ 
class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick();
    }
    render() {
        const { name, type } = this.props;
        return (
            <button
                className={`btn btn-outline-secondary own-button ${type}`}
                onClick={this.handleClick}
            >
                {name}
            </button>
        );
    }
}

export default Button;

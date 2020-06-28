import React, { Component } from "react";

interface ButtonProps {
    name: string;
    type: string;
    onClick: () => void;
  }

const Button = (props: ButtonProps) => {
    const handleClick = () => {
        props.onClick();
    }
    
    return (
        <button 
            className={`btn btn-outline-secondary own-button ${props.type}`}
            onClick={handleClick}>
            {props.name}
        </button>
    );
};


// class Button extends Component {
    
//     constructor(props: ButtonProps) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.props.onClick();
//     }

//     render() {
//         const { name, type } = this.props;
//         // const name = this.props.name;
//         // const type = this.props.type;
//         return (
//             <button
//                 className={`btn btn-outline-secondary own-button ${type}`}
//                 onClick={this.handleClick}
//             >
//                 {name}
//             </button>
//         );
//     }
// }

export default Button;

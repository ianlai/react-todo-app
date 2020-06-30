import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <div
                className ="chevron chevron-up"
                onClick = {() => {
                    setCount(count + 1);    
                }}
            />
            <div className ="number"> {count} </div>
            <div
                className ="chevron chevron-down"
                onClick = {() => {
                    setCount(count - 1);    
                }}
            />
        </div>
    );
};

export default Counter;

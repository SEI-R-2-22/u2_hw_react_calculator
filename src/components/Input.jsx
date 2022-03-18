import React from "react";

const Input = (props) => {
    
    return (
        <input type="text" name={props.name} placeholder="Enter a number" value={props.value} onChange={(e) => props.handleNum(e, e.target.name)} />
    )
}

export default Input
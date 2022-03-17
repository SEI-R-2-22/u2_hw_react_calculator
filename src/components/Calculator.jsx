import { useState } from 'react'

const Calculator = (props) => {

    const handleChange = (e, num) => {

        if(num === props.num1) {
            props.setNum1(e.target.value)
        } else{
            props.setNum2(e.target.value)
        }

    }

    const changeOperator = (e) => {
        props.setOperator(e.target.value);
    }

    const calcResults = () => {
        let output;
        switch(props.operator){
            case "+":
                output = parseInt(props.num1) + parseInt(props.num2);
                props.setResult(output);
                break;
            case "-":
                output = parseInt(props.num1) - parseInt(props.num2);
                props.setResult(output);
                break;
            case "*":
                output = parseInt(props.num1) * parseInt(props.num2);
                props.setResult(output);
                break;
            case "/":
                output = parseInt(props.num1) / parseInt(props.num2);
                props.setResult(output);
                break;
        }
    }



    return (
        <div className="container">
            <div className = "operators">
                <button value="+" onClick={(e) => changeOperator(e)}>+</button>
                <button value="-" onClick={(e) => changeOperator(e)}>-</button>
                <button value="*" onClick={(e) => changeOperator(e)}>*</button>
                <button value="/" onClick={(e) => changeOperator(e)}>/</button>
            </div>
            <div className="add">
                <input 
                    type="text" 
                    placeholder="Enter first number"
                    onChange={(e) => handleChange(e, props.num1)} 
                />
                <span>{ props.operator }</span>
                <input 
                    type="text" 
                    placeholder="Enter second number" 
                    onChange={(e) => handleChange(e, props.num2)} 
                />
                <button onClick={() => calcResults()}>=</button>
            </div>
            <h3 className="results">{ props.result }</h3>
        </div>
    )
}

export default Calculator;
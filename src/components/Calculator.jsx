import React, { useState } from 'react';


const Calculator =(props) => {

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [res, setRes] = useState('')
    const [operator, setOperator] = useState('+')

    const setNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if (e.target.name === 'first'){
            setFirst(e.target.value)
        }
        else {
            setSecond(e.target.value)
        }
    }

    const handleSolution = () => {
        if (first !== '' && second !=='') {
            if (operator === '+') {
            setRes(parseInt(first) + parseInt(second))}
            else if (operator === '-'){
            setRes(parseInt(first) - parseInt(second))}
            else if (operator === '*'){
            setRes(parseInt(first) * parseInt(second))}
            else if (operator === '/'){ 
            setRes(parseInt(first) / parseInt(second))}
            setFirst('')
            setSecond('')
        }
    }

    return (
    <div className="container">
        <div className="add">
            <input type="text" name="first" placeholder="Enter a number" value={first} onChange={(e) => setNum(e, first)}/>
            <span> 
                <select onChange={(e) => setOperator(e.target.value)}> 
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select></span>
            <input type="text" name="second" placeholder="Enter a number" value={second} onChange={(e) => setNum(e, second)}/>
            <button onClick={() => handleSolution()}>=</button>
        </div>
        <h3 className="results">{res !== '' ? res: 'Result'}</h3>
</div>
    );
}

export default Calculator;
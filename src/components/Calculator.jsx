import React from "react";
import { useState } from 'react'

const Calculator = (props) => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [results, setResults] = useState('')

    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        num === 'num1' ? setNum1(e.target.value) : setNum2(e.target.value)
    }

    const calculateNums = () => {
        if (isNaN(num1) || isNaN(num2)) setResults("Please enter a number")    
        else setResults(parseInt(num1) + parseInt(num2))
    }

  return (
    <div className="container">
      <div className="add">
        <input 
        type="text"
        name='num1'
        placeholder="Enter a number"
        value={num1} 
        onChange={(e) => handleNum(e, 'num1')}
        />
        <span>+</span>
        <input 
        type="text" 
        placeholder="Enter a number" 
        value={num2} 
        onChange={(e) => handleNum(e, 'num2')}
        />
        <button onClick={() => calculateNums()}>=</button>
      </div>
      <h3 className="results">{results}</h3>
    </div>
  );
};

export default Calculator
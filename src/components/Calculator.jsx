import React from "react";
import { useState } from "react";

const num1 = " ";
const num2 = " ";
const someValue = `${num1 + num2}`

const Calculator = (useState) => {
  const [result, setResult] = setResult(someValue)
  
  const handleNum = (e, num) => {
    if(num === num1) {
      setResult({num1: e.target.value}) 
    } else { 
      setResult({num2: e.target.value})
    }
    console.log(num)
    console.log(e.target.value)

    const handleSolution = () => {
    return (

        <div className="container">
  <div className="add">
    <input type="text" placeholder="Enter a number" />
    <span>+</span>
    <input type="text" placeholder="Enter a number" />
    <button>=</button>
    <button onClick={() => handleSolution()}>=</button>
)
    <input
  type="number"
  name="num1"
  placeholder="Enter your first number"
  value={useState}
  onChange={(e) => handleNum(e, 'num1')}
/>
  </div>
  <h3 className="results">Results go here!</h3>
</div>
    )


    }
  }}
export default Calculator;

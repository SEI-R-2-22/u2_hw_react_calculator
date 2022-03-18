import React from 'react'
import { useState } from 'react'




const Calculator = (props) => {
const [num1, setFirstNum] = useState('')
const [num2, setSecondNum] = useState('')
const [result, setResult] = useState('')

const handleChange = (e, num) => {
  if (num === 'num1') {
    setFirstNum(e.target.value)
  } else if (num === 'num2') {
    setSecondNum(e.target.value)
  }
} 


const handleSolution = () => {
  
  if (num1 && num2 !== '') {
    setResult(parseInt(num1) + parseInt(num2))
    console.log(result)
    setFirstNum('')
    setSecondNum('')
  } 
}

  return (
  <div className="container">
  <div className="add">
  <input
  type="number"
  name='num1'
  placeholder="Enter your first number"
  value={num1} 
  onChange={(e) => handleChange(e, 'num1')}
/>


    <span>+</span>
    <input
    type="number"
    name='num2'
    placeholder="Enter your first number"
    value={num2} 
    onChange={(e) => handleChange(e, 'num2')}
  />

    <button onClick={() => handleSolution()}>=</button>
  </div>
  <h3 className="results">{result}</h3>
</div>
  )
}

export default Calculator


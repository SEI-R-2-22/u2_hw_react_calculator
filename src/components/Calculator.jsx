import { useState } from 'react'

const Calculator = () => {

  let [num1, setNum1] = useState('')
  let [num2, setNum2] = useState('')
  let [result, setResult] = useState('')
  // let [operator, setOperator] = useState(["/", "*", '+', '-'])


const handleNum = (e, num) => {
  console.log(num)
  console.log(e.target.value)
  
  if (num === 'num1') {
    setNum1(e.target.value)
  } else {
    setNum2(e.target.value)
  }
}

const handleAddSolution = () => {
  if (num1 !== '' && num2 !== '') {
    setResult(parseInt(num1) + parseInt(num2))
    setNum1('')
    setNum2('')
  } 
}

  return (
    <div className="container">
    <div className="add">
      <input onChange={(e) => handleNum(e, 'num1')} type="text" placeholder="Enter a number" num1={num1}></input>
      <span>+</span>
      <input onChange={(e) => handleNum(e, 'num2')} type="text" placeholder="Enter a number" num2={num2}></input>
      <button onClick={handleAddSolution}>=</button>
    </div>
    <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator
import { useState } from "react"

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState('')
  const [buttonOp, setButtonOp] = useState('+')

  const handleNum = (e, num) => {
    num === 'firstNumber' ? setFirstNumber(e.target.value) : setSecondNumber(e.target.value) //tried a ternany, it worked! 
  }

  const handleSolution = (first, second, op) => {

    let firstX = parseInt(first)
    let secondX = parseInt(second)
    if (firstX !== '' && secondX !== '' ) {
      let maths = (`${firstX}${op}${secondX}`) //Template literals into one string 
      setResult(eval(maths)) //eval does maths to the one string
    } 
    setFirstNumber('')
    setSecondNumber('')
    // if (firstNumber && secondNumber !== '' && buttonOp === '+') {
    //   setResult((parseInt(firstNumber) + parseInt(secondNumber)))
    // } else if (firstNumber && secondNumber !== '' && buttonOp === '-') {
    //   setResult((parseInt(firstNumber) - parseInt(secondNumber)))
    // } else if (firstNumber && secondNumber !== '' && buttonOp === '*') {
    //   setResult((parseInt(firstNumber) * parseInt(secondNumber)))
    // } else if (firstNumber && secondNumber !== '' && buttonOp === '/') {
    //   setResult((parseInt(firstNumber) / parseInt(secondNumber)))
    // } 
    // setFirstNumber('')
    // setSecondNumber('')
    //^^^^^ Tried this first, worked, but looked too thicc. 
  }

  const changeOp = () => {
    if (buttonOp === '+') {
      setButtonOp('-')
    } else if (buttonOp === '-') {
      setButtonOp('*')
    } else if (buttonOp === '*') {
      setButtonOp('/')
    } else {
      setButtonOp('+')
    }
  }

  return (
    <div className="container">
      <h3>Click on operator button to change operators</h3>
      <div className="add">
        <input 
          type="text"
          name="firstNumber"
          placeholder="Enter your first number" 
          value={firstNumber}
          onChange={(e) => handleNum(e, 'firstNumber')}
        />
        {/* <span>+</span> */}
        <button onClick={() => changeOp()} >{buttonOp}</button>
        <input 
          type="text"
          name="secondNumber" 
          placeholder="Enter your second number"
          value={secondNumber}
          onChange={(e) => handleNum(e, 'secondNumber')}
        />
        <button onClick={() => handleSolution(firstNumber, secondNumber, buttonOp)}>=</button>
      </div>
      <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator


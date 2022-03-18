import { useState } from "react"

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState('')
  // const [someState, setSomeState] = useState({firstNumber: '', secondNumber: '', result: ''})

  const handleNum = (e, num) => {
    // console.log(num)
    // console.log(e.target.value)
    // if (num === 'firstNumber') {
    //   setFirstNumber(e.target.value)
    // } else if (num === 'secondNumber') {
    //   setSecondNumber(e.target.value)
    // }
    num === 'firstNumber' ? setFirstNumber(e.target.value) : setSecondNumber(e.target.value) //tried a ternany, it worked! 
  }

  function handleSolution() {
    if (firstNumber && secondNumber !== '') {
      setResult((parseInt(firstNumber) + parseInt(secondNumber)))
      setFirstNumber('')
      setSecondNumber('')
    }
  }

  return (
    <div className="container">
      <div className="add">
        <input 
          type="text"
          name="firstNumber"
          placeholder="Enter your first number" 
          value={firstNumber}
          onChange={(e) => handleNum(e, 'firstNumber')}
        />
        <span>+</span>
        <input 
          type="text"
          name="secondNumber" 
          placeholder="Enter your second number"
          value={secondNumber}
          onChange={(e) => handleNum(e, 'secondNumber')}
        />
        <button onClick={() => handleSolution()}>=</button>
      </div>
      <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator


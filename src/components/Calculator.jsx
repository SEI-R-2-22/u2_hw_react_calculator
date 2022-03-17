import { useState } from 'react'

const Calculator = () => {
  const [number1, setNumber1] = useState([])
  const [number2, setNumber2] = useState([])
  const [result, setResult] = useState([])

  const handleNum = (event, num) => {
    if (num === 'number1') {
      setNumber1(event.target.value)
    } else {
      setNumber2(event.target.value)
    }
  }

  const handleSolution = () => {
    let sum = 0

    if (number1 && number2 !== '') {
      setResult(Number(number1) + Number(number2))
    } else {
      alert('enter a number in each box')
    }

    return result
  }

  return (
    <div className="container">
      <div className="add">
        <input
          type="number"
          name="number1"
          placeholder="Enter your first number"
          value={number1}
          onChange={(e) => handleNum(e, 'number1')}
        />
        <span>+</span>
        <input
          type="number"
          name="number2"
          placeholder="Enter your second number"
          value={number2}
          onChange={(e) => handleNum(e, 'number2')}
        />
        <button onClick={handleSolution}>=</button>
      </div>
      <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator

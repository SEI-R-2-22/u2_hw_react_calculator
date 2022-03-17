import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')

  const handleNum = (e) => {
    if (e.target.name === 'num1') {
      setNum1(e.target.value)
    } else {
      setNum2(e.target.value)
    }
  }

  const handleSolution = () => {
    // Return early if num1 or num2 is an empty string
    if (!num1.trim().length || !num2.trim().length) {
      alert('Please enter a number. Inputs cannot be blank.')
      return
    }
    // Return early if the user enters characters other than numbers
    if (!num1.match(/^[0-9]+$/) || !num2.match(/^[0-9]+$/)) {
      alert('Please enter a valid number')
      return
    }
    const sum = parseInt(num1) + parseInt(num2)
    setResult(sum)
    setNum1('')
    setNum2('')
  }

  return (
    <div className="container">
      <div className="add">
        <input
          type="text"
          name="num1"
          placeholder="Enter your first number"
          value={num1}
          onChange={handleNum}
        />
        <span>+</span>
        <input
          type="text"
          name="num2"
          placeholder="Enter your second number"
          value={num2}
          onChange={(e) => handleNum(e, 'num2')}
        />
        <button onClick={handleSolution}>=</button>
      </div>
      <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator
import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')

  const handleNum = (e, num) => {
    if (num === 'num1') {
      setNum1(e.target.value)
    } else {
      setNum2(e.target.value)
    }
  }

  const handleSolution = () => {
    // Return early if num1 or num2 is an empty string
    if (!num1.length || !num2.length) {
      alert('Please enter a number')
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
          onChange={(e) => handleNum(e, 'num1')}
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
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
        <button>=</button>
      </div>
      <h3 className="results">Results go here!</h3>
    </div>
  )
}

export default Calculator
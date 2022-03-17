import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className="container">
      <div className="add">
        <input type="text" placeholder="Enter a number" />
        <span>+</span>
        <input type="text" placeholder="Enter a number" />
        <button>=</button>
      </div>
      <h3 className="results">Results go here!</h3>
    </div>
  )
}

export default Calculator
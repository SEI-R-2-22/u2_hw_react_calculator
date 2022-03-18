import { useState } from 'react'

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  let resultsElement = document.querySelector('.results')
  let results

  const handleNum = (e, num) => {
    if (num === 'num1') {
      setNum1(e.target.value)
    } else {
      setNum2(e.target.value)
    }
  }

  const handleSolution = () => {
    if (num1 && num2) {
      if (operator === '+') {
        results = parseInt(num1) + parseInt(num2)
        resultsElement.innerHTML = results
      } else if (operator === '-') {
        results = parseInt(num1) - parseInt(num2)
        resultsElement.innerHTML = results
      } else if (operator === '*') {
        results = parseInt(num1) * parseInt(num2)
        resultsElement.innerHTML = results
      } else if (operator === '/') {
        results = parseInt(num1) / parseInt(num2)
        resultsElement.innerHTML = results
      }
    }
  }

  const handleChange = () => {
    if (operator === '+') {
      setOperator('-')
    } else if (operator === '-') {
      setOperator('*')
    } else if (operator === '*') {
      setOperator('/')
    } else if (operator === '/') {
      setOperator('+')
    }
  }

  return (
    <div>
      <div className="container">
        <div className="add">
          <input 
            type="number" 
            name='num1' 
            placeholder="Enter your first number" 
            value={num1}
            onChange={(e) => handleNum(e, 'num1')}
          />
          <button onClick={() => handleChange()}>{operator}</button>
          <input 
            type="number" 
            name='num2' 
            placeholder="Enter your second number"
            value={num2}
            onChange={(e) => handleNum(e, 'num2')}
          />
          <button onClick={() => handleSolution()}>=</button>
        </div>
        <h3 className="results"></h3>
      </div>
    </div>
  )
}

export default Calculator
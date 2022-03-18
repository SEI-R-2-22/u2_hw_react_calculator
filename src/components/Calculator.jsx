import { useState } from 'react'

const Calculator = () => {
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [result, setResult] = useState(0)
  const [operator, setOperator] = useState('')

  const handleFirstNum = (e) => {
    setFirstNum(e.target.value)
  }

  const handleSecondNum = (e) => {
    setSecondNum(e.target.value)
  }

  const handleResult = () => {
    if (firstNum !== '' && secondNum !== '' && !isNaN(parseInt(firstNum)) && !isNaN(parseInt(secondNum))) {
      switch(operator) {
        case 'sum':
          setResult(parseInt(firstNum) + parseInt(secondNum))
          break
        case 'prod':
          setResult(parseInt(firstNum) * parseInt(secondNum))
          break
      }
    }
  }

  const handleSum = () => {
    setOperator('sum')
  }

  const handleProd = () => {
    setOperator('prod')
  }

  return (
    <div className="container">
      <div className="add">
        <input type="text" placeholder="Enter a number" onChange={handleFirstNum} />
        <button onClick={handleSum}>+</button>
        <button onClick={handleProd}>*</button>
        <input type="text" placeholder="Enter a number" onChange={handleSecondNum} />
        <button onClick={handleResult}>=</button>
      </div>
      <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator
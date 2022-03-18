import { useState } from 'react'

const Calculator = () => {
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [result, setResult] = useState('')

  const handleFirstNum = (e) => {
    setFirstNum(e.target.value)
  }

  const handleSecondNum = (e) => {
    setSecondNum(e.target.value)
  }

  const handleResult = () => {
    if (firstNum !== '' && secondNum !== '' && !isNaN(parseInt(firstNum)) && !isNaN(parseInt(secondNum))) {
      let sum = parseInt(firstNum) + parseInt(secondNum)
      setResult(sum)
    }
  }

  return (
    <div className="container">
      <div className="add">
        <input type="text" placeholder="Enter a number" onChange={handleFirstNum} />
        <span>+</span>
        <input type="text" placeholder="Enter a number" onChange={handleSecondNum} />
        <button onClick={handleResult}>=</button>
      </div>
      <h3 className="results">{result}</h3>
    </div>
  )
}

export default Calculator
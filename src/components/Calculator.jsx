import {useState} from 'react'

const Calculator = () => {

  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [result, setResult] = useState('')

  const handleNum = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    if (num === 'num1') {
      setFirstNum(e.target.value)
    } else if (num === 'num2') {
      setSecondNum(e.target.value)
    }
  }

  const handleSolution = () => {
    
    if (firstNum && secondNum) {
      setResult(parseInt(firstNum) + parseInt(secondNum))
      setFirstNum('')
      setSecondNum('')
    }
    
    }

  return (
    <div className="container">
  <div className="add">
      <input
    type="number"
    name="num1"
    placeholder="Enter first number"
    onChange={(e) => handleNum(e, 'num1')}
    />
    <span>+</span>
    <input
    type="number"
    name="num2"
    placeholder="{secondNumEnter second number}"
    onChange={(e) => handleNum(e, 'num2')}
    />
    <button onClick={() => handleSolution()}>=</button>
  </div>
  <h3 className="results">{result}</h3>
</div>
  )
}

export default Calculator

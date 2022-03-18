import { useState } from 'react'

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  const handleNum = (e, num) => {
    console.log(num)
    if (num === "num 1") {
      setNum1(e.target.value)
    } else {
      setNum2(e.target.value)
    }
  }

  const handleSolution = () => {
    if (num1 && num2) {
      let sum = parseInt(num1) + parseInt(num2)
      setResult(sum)
      setNum1('')
      // setNum(sum)
      setNum2('')
      // setResult(0)
    }
  }

  return (
    <div className="container">
      <div className="add">
        <input type="number" name="num1" placeholder="Enter a number" value={num1} onChange={(e) => handleNum(e, 'num 1')} />
        <span>+</span>
        <input type="number" name="num1" placeholder="Enter a number" value={num2} onChange={(e) => handleNum(e, 'num2')}/>
        <button onClick={() => handleSolution()}>=</button>
      </div>
      <h3 className="results">{result}</h3>
</div>
  )
}

export default Calculator
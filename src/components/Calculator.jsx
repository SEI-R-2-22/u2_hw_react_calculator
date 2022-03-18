import { useState } from 'react'

const Calculator = () => {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [sum, setSum] = useState('')

  const handleNum = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    if (num === 'num1') {
     setNum1(e.target.value)
    } else if (num === 'num2') {
      setNum2(e.target.value)
    }
  }

  const handleSolution = () => {
    if (num1.length > 0 &&  num2.length > 0) {
      setSum(parseInt(num1) + parseInt(num2))
      setNum1('')
      setNum2('')
    }
    }

return (
  <div className="container">
  <div className="add">
    <input type="number" 
    name="num1" 
    placeholder="Enter a number here" 
    value={num1}
    onChange={(e) => handleNum(e, 'num1')}/>

    <span>+</span>
     <input type="number" 
    name="num2" 
    placeholder="Enter a number here" 
    value={num2}
    onChange={(e) => handleNum(e, 'num2')}/>
    <button onClick={() => handleSolution()}>=</button>
  </div>
  <h3 className="results">{sum}</h3>
</div>
)
}

export default Calculator
import {useState} from 'react'

const Calculator = (props) => {
  let [num1, setNum1] = useState('')
  let [num2, setNum2] = useState('')
  let [total, setTotal] = useState(0)

  const handleNum = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    if(e.target.name === 'num1'){
      setNum1(e.target.value)
    } else {
      setNum2(e.target.value)
    }
  }

  const handleSolution = () => {
    if (num1 !== "" && num2 !== "") {
      setTotal(parseInt(num1)+parseInt(num2))
      console.log(total)
      setNum1('')
      setNum2('')
    }
    }

  return (
    <div className="container">
      <div className="add">
        <input
            type="number"
            name="num1"
            placeholder="Enter your first number"
            value={num1}
            onChange={(e) => handleNum(e)}
        />
        <span>+</span>
        <input
            type="number"
            name="num2"
            placeholder="Enter your first number"
            value={num2}
            onChange={(e) => handleNum(e)}
        />
        <button onClick={() => handleSolution()}>=</button>
      </div>
      <h3 className="results">{total}</h3>
    </div>
  )
}

export default Calculator
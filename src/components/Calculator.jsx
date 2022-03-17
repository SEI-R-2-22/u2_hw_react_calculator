import { useState } from "react"

const Calculator = (props) => {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [results, setResults] = useState('')

  const handleChange1 = (event) => {
    setNum1(event.target.value) 
  }

  const handleChange2 = (event) => {
    setNum2(event.target.value)
  }

  const handleSolution = () => {
        if (num1 && num2){
          if (num1.length > 0 && num2.length > 0) {
        setResults(parseInt(num1) + parseInt(num2))
        }
      }
    }


  return (
    <div className="container">
    <div className="add">
      <input type="text" placeholder="Enter a number" onChange={(event) => handleChange1(event)}/>
      <span>+</span>
      <input type="text" placeholder="Enter a number" onChange={(event) => handleChange2(event)}/>
      <button onClick={() => handleSolution()}>=</button>
    </div>
    <h3 className="results">{results}</h3>
  </div>
  )
}

export default Calculator 
import { useState} from 'react'

function Calculator(props) {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')


function handleNum(e, num) {
    console.log(num)
    console.log(e.target.value)
    if (num === num1) {
      setNum1(e.target.value)
    } else {
        setNum2(e.target.value)
    }
}

   function handleSolution() {
     if (num1 && num2 !== '') {
      setResult(parseInt(num1) + parseInt(num2))
    }
  }


  return (
    <div className="container">
  <div className="add">
    <input type="text" 
    name="num1"
    placeholder="Enter a number" 
    value= {props.value}
    onChange={(e) => handleNum(e, num1)} />
    <span>+</span>
    <input type="text" 
    name="num2"
    placeholder="Enter a number" 
    value={props.value}
    onChange={(e) => handleNum(e, num2)} />
    <button onClick={() => handleSolution()}>=</button>
  </div>
  <h3 className="results">{result}</h3>
</div>
  )
}

export default Calculator
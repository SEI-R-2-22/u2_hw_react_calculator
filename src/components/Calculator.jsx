import React, {useState} from "react";

function Calculator() {
const [ num1, setNum1 ] = useState('')
const [ num2, setNum2 ] = useState('')
const [ sum, setSum ] = useState('')

const handleNum = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    if (e.target.name === 'num1') {
        setNum1(e.target.value)
        console.log(num1)
    }
    if (e.target.name === 'num2') {
        setNum2(e.target.value)
        console.log(num2)
    }
}

const handleSolution = () => {
    if (!isNaN(num1) && !isNaN(num2) )
    setSum(parseInt(num1) + parseInt(num2))
    else {alert('Please enter a valid number')}
}
    return (
        <div className="container">
  <div className="add">
    <input type="text" placeholder="Enter a number" name="num1" value={num1} onChange={(e) => handleNum(e, 'num1')} />
    <span>+</span>
    <input type="text" placeholder="Enter a number" name="num2" value={num2} onChange={(e) => handleNum(e, 'num2')}/>
    <button onClick={() => handleSolution()}>=</button>
  </div>
  <h3 className="results">{sum !== '' ? sum : 'Answer'}</h3>
</div>
    )
}

export default Calculator
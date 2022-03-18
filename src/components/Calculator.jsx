import {useState} from 'react'

function Calculator(props) {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if (num === 'num1') {
            setNum1(e.target.value)
        } else (num === 'num2'); {
            setNum2(e.target.value)

        }
    }
}

const handleSolution = () => {
    let sum = 0;
    
    if (num1 && num2 !== '') {
       setResult(parseInt(num1) + parseInt(num2))


    }
}


render (
        <div className="container">
      <div className="add">
        <input
        type="number"
        name="num1"
        placeholder="enter number"
        value={props.value}
        onChange={(e) => handleNum(e, num1)} />
        <span>+</span>
        <input 
        type="number"
        name="num2"
        placeholder="enter number"
        value={props.value}
        onChange={(e) => handleNum(e, num2)} />
        <btn onClick={() => handleSolution()}>=</btn>
    </div>
      <h3> className="results"{result}</h3>
</div>
  )

  export default Calculator;
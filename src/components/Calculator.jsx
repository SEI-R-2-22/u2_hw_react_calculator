import { useState } from "react"

const Calculator = () => {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [num3, setNum3] = useState("")
  const [operator, setOperator] = useState('+')


    const handleNum = (e, num) => {
      if (num === 'num1') {
        setNum1(e.target.value)
      } else {
        setNum2(e.target.value)
      }
    }

    const changeOperator = () => {
      switch(operator) {
        case '+':
          setOperator('-')
          break
        case '-': 
          setOperator('*')
          break
        case '*':
          setOperator('/')
          break
        default:
          setOperator('+')
          break
      }
    }

    const handleSolution = () => {

    if (num1 && num2) {
      switch(operator) {
        case '+':
          let plus = parseInt(num1) + parseInt(num2)
          setNum3(plus)
          setNum2('')
          setNum1(plus)
          break
        case '-': 
          let minus = parseInt(num1) - parseInt(num2)
          setNum3(minus)
          setNum2('')
          setNum1(minus)
          break
        case '*':
          let mult = parseInt(num1) * parseInt(num2)
          setNum3(mult)
          setNum2('')
          setNum1(mult)
          break
        default:
          let div = parseInt(num1) / parseInt(num2)
          setNum3(div)
          setNum2('')
          setNum1(div)
          break
      }

    }

    }


  return (
    <div className="container">
      <div className="add">
        <input type="text" placeholder="Enter a number" onChange={(e) => handleNum(e , 'num1')} value={num1}/>
        <span onClick={() => changeOperator()}>{operator}</span>
        <input type="text" placeholder="Enter a number" onChange={(e) => handleNum(e , 'num2')} value={num2}/>
        <button onClick={num1 && num2 ? () => handleSolution() : null}>=</button>
      </div>
      <h3 className="results">{num3}</h3>
    </div>
  )
}

export default Calculator
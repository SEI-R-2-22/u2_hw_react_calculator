import { useState } from "react"

const Calculator = () => {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [num3, setNum3] = useState("")


    const handleNum = (e, num) => {
      if (num === 'num1') {
        setNum1(e.target.value)
      } else {
        setNum2(e.target.value)
      }
    }

    const handleSolution = () => {

    if (num1 && num2) {
      let value = parseInt(num1) + parseInt(num2)
      setNum3(value)
      setNum2('')
      setNum1(value)
    }

    }


  return (
    <div className="container">
      <div className="add">
        <input type="text" placeholder="Enter a number" onChange={(e) => handleNum(e , 'num1')} value={num1}/>
        <span>+</span>
        <input type="text" placeholder="Enter a number" onChange={(e) => handleNum(e , 'num2')} value={num2}/>
        <button onClick={() => handleSolution()}>=</button>
      </div>
      <h3 className="results">{num3}</h3>
    </div>
  )
}

export default Calculator
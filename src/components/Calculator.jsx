import { useState } from "react"


const Calculator = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')


        const handleNum = (e, num) => {

            if (num === num1) {
                setNum1(e.target.value)
            } else {
                setNum2(e.target.value)
            }

          }

          const handleSolution = () => {
              if (isNaN(num1) || isNaN(num2)){
                  setResult('PLEASE ENTER ONLY NUMBERS!')
                  

              } else {
                  let sum;
                  sum = parseInt(num1) + parseInt(num2);
                  let sumString = sum.toString()
                  setResult(sumString)
                  setNum1('')
                  setNum2('')

              }

              
          }

          <button onClick={() => handleSolution()}>=</button>



    return (
        <div className="container">
  <div className="add">
    <input type="text" placeholder="Enter a number" value={num1} onChange ={(e) => handleNum(e, num1)} />
    <span>+</span>
    <input type="text" placeholder="Enter a number" value={num2} onChange ={(e) => handleNum(e, num2)} />
    <button>=</button>
  </div>
  <h3 className="results">{result}</h3>
</div>


    )
}

export default Calculator
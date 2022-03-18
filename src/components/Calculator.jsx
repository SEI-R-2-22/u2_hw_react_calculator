import { useState } from "react"

const Calculator = () => {

    const [num1,setNum1] = useState('')
    const [num2,setNum2] = useState('')
    const [result,setResult] = useState('')

    const handleNum = (e, num) => {
        console.log(e.target.value)

        if(num === num1) {
            setNum1(e.target.value)

        } else {
            setNum2(e.target.value)
        }
      }

      const handleSolution = (something) => {
        if(isNaN(num1) || isNaN(num2)) {
            setNum1('')
            setNum2('')
            setResult('Cannot Calculate! NUMBERS ONLY!')
        } else {
            switch (something) {
                case '+':
                    setResult(parseInt(num1) + parseInt(num2))
                    break
                case '-':
                    setResult(parseInt(num1) - parseInt(num2))
                    break
                case '*':
                    setResult(parseInt(num1) * parseInt(num2))
                    break
                case '/':
                    setResult(parseInt(num1) / parseInt(num2))
                    break
            }
            setNum1('')
            setNum2('')
        }
        }
        

    return (
        <div>
            <div className="container">
            <div className="add">
            <input type="text" placeholder="Enter a number" value={num1} onChange ={(e) => handleNum(e, num1)}/>
   
            <input type="text" placeholder="Enter a number" value={num2} onChange ={(e) => handleNum(e, num2)}/>
            <button onClick={() => handleSolution('+')}>+</button>
            <button onClick={() => handleSolution('-')}>-</button>
            <button onClick={() => handleSolution('*')}>x</button>
            <button onClick={() => handleSolution('/')}>/</button>

            </div>
                <h3 className="results">{result}</h3>
            </div>
        </div>
    )
}

export default Calculator
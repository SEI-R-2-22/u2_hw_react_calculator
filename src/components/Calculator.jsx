import { useState } from "react"

function Calculator() {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if (num === 'num1') {
            setNum1(e.target.value)
        } else if (num === 'num2') {
            setNum2(e.target.value)
        }
        
      }

      const handleResult = () => {
          console.log(result)
        if (num1.length > 0 && num2.length > 0)
        setResult(parseInt(num1) + parseInt(num2))
      }

    return (
        <div className="container">
            <div className="add">
            <input
                type="number"
                name="num1"
                placeholder="Enter your first number"
                value={num1}
                onChange={(e) => handleNum(e, 'num1')}
/>
                <span>+</span>
                <input
                    type="number"
                    name="num1"
                    placeholder="Enter your second number"
                    value={num2}
                    onChange={(e) => handleNum(e, 'num2')}
/>
                <button onClick={() => handleResult()}>=</button>
            </div>
            <h3 className="results">{result}</h3>
        </div>
    )

}

export default Calculator
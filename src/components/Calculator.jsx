import React, { useState } from "react";

const Calculator = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')   
    const setNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if (num === num1 && num !== num2){
            setNum1(e.target.value)
        } else {
            setNum2(e.target.value)
        }
    }

    const handleSolution = () => {
        if (num1 !== '' && num2 !=='') {
            setResult(parseInt(num1) + parseInt(num2))
            setNum1('')
            setNum2('')
        }
    }

return (
        <div className="container">
        <div className="add">          
            <input type="text" placeholder="Enter a number" value={num1} onChange={(e) => setNum(e, num1)}/>
            <span>+</span>
            <input type="text" placeholder="Enter a number" value={num2} onChange={(e) => setNum(e, num2)}/>
            <button onClick={handleSolution}>=</button>
        </div>
        <h3 className="results">{result}</h3>
        </div>
    )
}

export default Calculator
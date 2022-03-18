import React, { useState } from "react";

const Calculator = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')   
    
    const handleNum = (e, num) =>{
        console.log(num)
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.name === "num1"){
            setNum1(e.target.value)
        } else if(e.target.name === "num2"){
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
            <input type="text" placeholder="Enter a number" value={num1} onChange={(e) => handleNum(e, num1)}/>
            <span>+</span>
            <input type="text" placeholder="Enter a number" value={num2} onChange={(e) => handleNum(e, num2)}/>
            <button onClick={handleSolution}>=</button>
        </div>
        <h3 className="results">{result}</h3>
        </div>
    )
}

export default Calculator
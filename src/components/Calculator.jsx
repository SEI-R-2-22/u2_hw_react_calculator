import React, { useState } from 'react'

const Calculator = (props) => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [results, setResults] = useState('')

    const handleNum = (e) => {
        console.log('num')
        console.log(e.target.value)
        if (e.target.name === 'num1') {
            setNum1(e.target.value)
        } if (e.target.name === 'num2') {
            setNum2(e.target.value)
        }
    }    

    const handleAnswer = (e) => {
            setResults(
                parseInt(num1) + parseInt(num2)
            )
        }

    return(
        <div className="container">
            <div className="add">
                <input type="number" name='num1' placeholder="Enter a number" value={num1} onChange={(e) => handleNum(e, num1)}/>
                <span>+</span>
                <input type="number" name='num2' placeholder="Enter a number" value={num2} onChange={(e) => handleNum(e, num2)}/>
                <button onClick={handleAnswer}>=</button>
            </div>
            <h3 className="results">{results !== '' ? results : 'Result'}</h3>
        </div>
    )
}


export default Calculator
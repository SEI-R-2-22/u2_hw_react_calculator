import React, { useState } from 'react';

function Calculator(props) {

    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')
    const [result, setResult] = useState('')

    const handleNum = (event, numInput) => {
        if(event.target.name === "firstInput"){
            setFirstInput(event.target.value)
        }else if(event.target.name === "secondInput"){
            setSecondInput(event.target.value)
        }
    }

    const handleSolution = () => {
        if(firstInput && secondInput){
            setResult(parseInt(firstInput) + parseInt(secondInput))
            setFirstInput("")
            setSecondInput("")
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input type="text" name="firstInput" placeholder="Enter a number" value={firstInput} onChange={(event) => handleNum(event, firstInput)}/>              
                <span>+</span>               
                <input type="text" name="secondInput" placeholder="Enter a number" value={secondInput} onChange={(event) => handleNum(event, secondInput)}/>
                <button onClick={handleSolution}>=</button>
            </div>
            <h3 className="results">{result}</h3>
        </div>
    );
}

export default Calculator;
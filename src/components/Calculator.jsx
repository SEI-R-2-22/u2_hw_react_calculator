import React, { useState } from 'react';

function Calculator(props) {

    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')
    const [result, setResult] = useState('')

    const handleNum = (e, numInput) => {
        console.log(numInput)
        console.log(e.target.value)
        if(numInput === firstInput){
            setFirstInput(e.target.value)
        }else{
            setSecondInput(e.target.value)
        }
    }

    const handleSolution = () => {
        if(firstInput && secondInput){
            setResult(parseInt(firstInput) + parseInt(secondInput))
        }
    }

    return (
        <div className="container">
            <div className="add">
                
                <input type="text" name="firstInput" placeholder="Enter a number" value={firstInput} onChange={(e) => handleNum(e, firstInput)}/>
                
                <span>+</span>
                
                <input type="text" name="secondInput" placeholder="Enter a number" value={secondInput} onChange={(e) => handleNum(e, secondInput)}/>
                <button onClick={handleSolution}>=</button>
            </div>
            <h3 className="results">Results go here!: {result}</h3>
        </div>
    );
}

export default Calculator;
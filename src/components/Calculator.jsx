import React, { useState } from 'react';

function Calculator(props) {

    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')
    const [operation, setOperation] = useState('+')
    const [result, setResult] = useState('')

    const handleNum = (event, numInput) => {
        if(event.target.name === "firstInput"){
            setFirstInput(event.target.value)
        }else if(event.target.name === "secondInput"){
            setSecondInput(event.target.value)
        }
    }

    const handleOperation = (event) => {
        if(event.target.value === '+'){setOperation('+')}
        else if(event.target.value === '-'){setOperation('-')}
        else if(event.target.value === '*'){setOperation('*')}
        else if(event.target.value === '/'){setOperation('/')}
    }

    // const handleSolution = () => {
    //     if(firstInput && secondInput){
    //         if(operation === '+'){
    //             setResult(parseInt(firstInput) + parseInt(secondInput))
    //         }else if(operation === '-'){
    //             setResult(parseInt(firstInput) - parseInt(secondInput))
    //         }else if(operation === '*'){
    //             setResult(parseInt(firstInput) * parseInt(secondInput))
    //         }else if(operation === '/'){
    //             setResult(parseInt(firstInput) / parseInt(secondInput))
    //         }
            
    //         setFirstInput("")
    //         setSecondInput("")
    //     }
    // }

    const handleSolution = () => {
        if(firstInput && secondInput){
            if(operation === '+'){
                return(parseInt(firstInput) + parseInt(secondInput))
            }else if(operation === '-'){
                return(parseInt(firstInput) - parseInt(secondInput))
            }else if(operation === '*'){
                return(parseInt(firstInput) * parseInt(secondInput))
            }else if(operation === '/'){
                return(parseInt(firstInput) / parseInt(secondInput))
            }
            
            setFirstInput("")
            setSecondInput("")
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input type="text" name="firstInput" placeholder="Enter a number" value={firstInput} onChange={(event) => handleNum(event, firstInput)}/>              
                <select name="operation" onChange={(event) => handleOperation(event)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="text" name="secondInput" placeholder="Enter a number" value={secondInput} onChange={(event) => handleNum(event, secondInput)}/>
                <button onClick={handleSolution}>=</button>
            </div>
            <h3 className="results">{handleSolution()}</h3>
        </div>
    );
}

export default Calculator;
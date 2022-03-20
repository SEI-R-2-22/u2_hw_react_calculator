import React, { useState } from 'react'


const Calculator = () => {

    const [inputOne, setInputOne]= useState('')
    const [inputTwo, setInputTwo]= useState('')
    const [results, setResults]= useState('')
    // const handleNum = (e, num) => {
    //     console.log(num)
    //     console.log(e.target.value)
    // }

    const setNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if (num === inputOne && num !== inputTwo){
            setInputOne(e.target.value)
        } else {
            setInputTwo(e.target.value)
        } 
    }


    const showSolution = () => {
        if(inputOne !== '' && inputTwo !==''){
         setResults(parseInt(inputOne)+parseInt(inputTwo))
           setInputOne('')
           setInputTwo('')
        }
    }

    return(
    <div className="container">
    <div className="add">
        <input type="text" placeholder="Enter a number" value={inputOne} onChange={(e) => setNum(e, inputOne)}/>
        <span>+</span>
        <input type="text" placeholder="Enter a number" value={inputTwo} onChange={(e) => setNum(e, inputTwo)}/>
        <button onClick= {showSolution}>=</button>
    </div>
    <h3 className="results">{results}</h3>
    </div>
    )
}

export default Calculator
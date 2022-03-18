import React, { useState } from "react"

const Calculator = (props) => {
    const [num1, setFirstNum] = useState('')
    const [num2, setSecondNum] = useState('')
    const [total, setTotal] =  useState('')
    //function below changes value of input text
    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
            if (num === 'num1') {
                setFirstNum(e.target.value)
            } else if (num === 'num2') {
                setSecondNum(e.target.value)
            }
    }
    // function below will set total
    const handleSolution = () => {
        
        // if(num1 && num2 != (num1, num2)){
            setTotal(parseInt(num1)+parseInt(num2));

        
     
       
        }
   

    
    return(
        <div className="container">
            <div className="add">
                <input onChange={(e) =>handleNum(e, 'num1')} value={num1} type="text" placeholder="Enter a number" />
                <span>+</span>
                <input onChange={(e) =>handleNum(e, 'num2')} value={num2}type="text" placeholder="Enter a number" />
                <button onClick={()=>handleSolution()}>=</button>
                </div>
            <h3 className="results">{total}</h3>
        </div>


)}
export default Calculator


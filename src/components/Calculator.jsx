import React from 'react'
import { useState } from 'react'

const Calculator = (props) => {
const [num1, setNum1] = useState('')
const [num2, setNum2] = useState('')
const [result, setResult] = useState('')

  const handleNum = (e, num) => {
      console.log(num)
      console.log(e.target.value)

    if(num==='num1'){
     setNum1(e.target.value)
    } else if(num==='num2'){
      setNum2(e.target.value) }

  }

  const handleSolution = () => {
    if (num1 !== "" && num2 !== "") {
        setResult(parseInt(num1)+parseInt(num2))
        console.log(result)
        
    
    }
    
    
    
    <button onClick={() => handleSolution()}>=</button>
  }

    return(
        <div className="container">
        <div className="add">
          <input type="number" placeholder="Enter a number" 
               name='num1'
      
               value={num1}
               onChange={(e) => handleNum(e, 'num1')}
               />
          <span>+</span>

          <input 
          type="number"     placeholder="Enter a number"
          name='num2'
      
          value={num2}
          
          onChange={(e) => handleNum(e, 'num2')}
           />
          <button onClick={()=> handleSolution()}>=</button>
        </div>
        <h3 className="results">{result}</h3>
      </div> 
       

    )
}

export default Calculator
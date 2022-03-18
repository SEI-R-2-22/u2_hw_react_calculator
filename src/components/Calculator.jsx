import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

const Calculator = () => {
  const [ num1, setNum1 ] = useState('')
  const [ num2, setNum2 ] = useState('')
  const [ operator, setOperator ] = useState('+')
  const solutionEl = useRef(null)

  const updateNum = (numName,e) => {
    if (numName==='num1')
      setNum1(Number(e.target.value))
    else 
      setNum2(Number(e.target.value))
  }

  const calculateOperators = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => a/b
  }

  const handleSolution = () => {
    solutionEl.current.innerText = calculateOperators[operator](num1,num2)
  }


  const updateOperator = (e) => {
    setOperator(e.target.value)
  }

  return (
  <div className="container">
    <div className="add">
      <input type="text" name='num1' placeholder="Enter a number" value={num1} onChange={(e)=>updateNum('num1',e)}/>
      <select className='dropDown' onChange={updateOperator}>
        {Object.keys(calculateOperators).map(operator => <option key={operator} value={operator}>{operator}</option>)}
      </select>
      <input type="text" name='num2' placeholder="Enter a number" value={num2} onChange={(e)=>updateNum('num2',e)}/>
      <button onClick={()=>handleSolution()}>=</button>
    </div>
    < h3 className="results" placeholder='Results go here!' ref={solutionEl}></h3>
  </div>
  )
}

export default Calculator
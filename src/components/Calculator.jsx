import React, { useState } from "react";

const Calculator = () => {

const [first, setFirst] = useState('')
const [second, setSecond] = useState('')
const [res, setRes] = useState('')
const setNum = (e,num) => {
    console.log(num)
    console.log(e.target.value)
    if(num === first){
        setFirst(e.target.value)
    }
    else {
        setSecond(e.target.value)
    }

}

const handleSolution = () => {
    if(first && second) {
        setRes(parseInt(first) + parseInt(second))
       
    }
}

return (
<div className="container">
  <div className="add">
    <input type="text"  placeholder="Enter a number" value={first} onChange={(e) => setNum(e, first)} />
    <span>+</span>
    <input type="text" placeholder="Enter a number" value={second} onChange={(e) => setNum (e, second)}/>
    <button onClick={handleSolution}>=</button>
  </div>
  <h3 className="results">{res}</h3>
</div>
)
}
export default Calculator 

import React, { useState } from "react";

const Calculator = (props) =>{

    const [num1, setNum1] = useState ("")
    const [num2, setNum2] = useState ("")
    const [sum, setSum] = useState("")
    const [op,setOp] = useState("+")

    const handleNum = (e, num) => {
        // console.log(num)
        // console.log(e.target.value)
        if(e.target.name === "num1"){setNum1(e.target.value)}
        if(e.target.name === "num2"){setNum2(e.target.value)}

      }
      const handleSolution=()=>{
          if(!isNaN(parseInt(num1)) && !isNaN(parseInt(num2)) ){

            if(op === "+" ) {setSum(parseInt(num1)+parseInt(num2))}
            console.log("afterplus before -")
            if(op === "-" ) {setSum(parseInt(num1)-parseInt(num2))}
            
            if(op === "/" ) {setSum(parseInt(num1)/parseInt(num2))}
            
            if(op === "*" ) {setSum(parseInt(num1)*parseInt(num2))}

            setNum1("")
            setNum2("")
        
    }}
            
      

      const handleOp =(e,op)=>{
          if (e.target.name === "oper"){
              setOp(e.target.value)
          }
      }

    

    return (
        <div className="container">
        <div className="add">
            <input type="text" placeholder="Enter a number" name="num1" value={num1} onChange={(e) => handleNum(e, 'num1')}/>



            <span><input type="text" placeholder="enter operator" name="oper" value={op} onChange={(e) => handleOp(e, 'plus')}/></span>



            <input type="text" placeholder="Enter a number" name="num2" value={num2} onChange={(e) => handleNum(e, 'num2')} />
            <button onClick={()=>{handleSolution()}}>=</button>
        </div>
        <h3 className="results">{sum}</h3>
        </div>
    )

}

export default Calculator
import React, { useState } from "react"


const Calculator = () => {

    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [sign, setSign] = useState("+")
    const [result, setResult] = useState()
    


    const handleChange = (e, set) => {
      
            set(e.target.value)

        
        
        


    }

    const sumResult = () => {
        

        switch (sign) {

            case "+":
                setResult(parseInt(first)+parseInt(second)) 
               
                // return result1
                
                break;


            case "-":
                setResult(parseInt(first)-parseInt(second)) 
                
                break;


            case "*":
                setResult(parseInt(first)*parseInt(second)) 
                
                break;

            case "/":
                setResult(parseInt(first)/parseInt(second)) 
                
                break;

            default:
                console.log("default sumResult")
                break;



        }
        
        

        
    }

    const changeSign = () => {

        switch (sign) {

            case "+":
                setSign("-")
                break;


            case "-":
                setSign("*")
                break;


            case "*":
                setSign("/")
                break;

            case "/":
                setSign("+")
                break;

            default:
                console.log("default changeSign")


        }

    }

    return (
    
    <div className="container">
    <div className="add">
      <input onChange={(event) => handleChange(event, setFirst)} type="text" placeholder="Enter a number" />
      <button onClick={changeSign} >{sign}</button>
      <input onChange={(event) => handleChange(event, setSecond)} type="text" placeholder="Enter a number" />
      <button onClick={sumResult}>=</button>
    </div>
    <h3 className={"results"}>{result}</h3>
  </div>
  
  )


}

export default Calculator
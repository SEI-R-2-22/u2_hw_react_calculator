import React, { useState } from "react"
import Input from "./Input"

const Calculator = (props) => {
    
    const [operator, setOperator] = useState("+")

    const [num1, setNum1] = useState("")

    const [num2, setNum2] = useState("")

    const [results, setResults] = useState("")

    const sumNum = () => setResults(parseInt(num1) + parseInt(num2))

    const minusNum = () => setResults(parseInt(num1) - parseInt(num2))

    const multiplyNum = () => setResults(parseInt(num1) * parseInt(num2))

    const divideNum = () => setResults(parseInt(num1) / parseInt(num2))
    
    const remainderNum = () => setResults(parseInt(num1) % parseInt(num2))

    const toPowerNum = () => setResults(parseInt(num1) ** parseInt(num2))
    
    const handleNum = (e, num) => num === "num1" ? setNum1(e.target.value) : setNum2(e.target.value)

    const handleOperator = () => {
        operator === "+" ? setOperator("-")
        : operator === "-" ? setOperator("*")
        : operator === "*" ? setOperator("/")
        : operator === "/" ? setOperator("%")
        : operator === "%" ? setOperator("^")
        : setOperator("+")
    }   
    
    const handleSolutions = () => {
        num1!== "" && num2 !=="" ? 
            isNaN(num1) || isNaN(num2) ? alert("Enter a number")
            : operator === "+" ? sumNum()
            : operator === "-" ? minusNum()
            : operator === "*" ? multiplyNum()
            : operator === "/" ? divideNum()
            : operator === "%" ? remainderNum()
            : operator === "^" ? toPowerNum()
            : setOperator("+")
        :alert("Enter a number")
        }


    return (
        <div className="container">
            <div className="add">
                <Input name="num1" value={num1} handleNum={handleNum} />
                <span onClick={() => handleOperator()}>{operator}</span>
                <Input name="num2" value={num2} handleNum={handleNum} />
                <button onClick={() => handleSolutions()}>=</button>
            </div>
            <h3 className="results">{results}</h3>
        </div>
    )
}

export default Calculator









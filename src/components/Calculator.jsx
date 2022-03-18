import { useState } from "react"

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    
    const handleNum1 = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        setNum1(e.target.value)
    }

    const handleNum2 = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        setNum2(e.target.value)
    }
    const handleSolution = () => {
        let sum
    } 

    return(
    <div className="container">
    <div className="add">
    <input 
        type="text" 
        name ="num1" 
        placeholder="Enter a number" 
        value={num1} 
        onChange={(e) => handleNum1(e, num1)}
    />
    <span>+</span>
    <input 
        type="text"
        name ="num2"
        placeholder="Enter a number"
        value={num2}
        onChange={(e) => handleNum2(e, num2)}
    />
    <button onClick={() => handleSolution()}>=</button>
    </div>
    <h3 className="results">Results go here!</h3>
    </div>
)
}

export default Calculator
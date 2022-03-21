import { useState } from 'react'

const Calculator = () => {

    const [results, setResult] = useState ()
    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
    }

    let num1
    let num2
    const handleSolution = () => {
            if (num1 != "" && num2 != ""){
                let sum = parseInt(num1 + num2)
                setResult(sum)
                console.log(sum)
            }
        }


    return (
        <div className="container">
         <div className="add">
           <input type="text" 
                name="num1"
                placeholder="Enter a number"
                value={handleNum.value}
                onChange={(e) => handleNum(e, 'num1')} 
            />
           <span>+</span>
           <input type="text" 
                name="num2"
                placeholder="Enter a number"
                value={handleNum.value}
                onChange={(e) => handleNum(e, 'num2')} />
           <button onClick={() => handleSolution()}>=</button>
         </div>
         <h3 className="results">{results}</h3>
        </div>
    )
}
export default Calculator
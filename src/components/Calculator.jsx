import React, {useState} from 'react'

const Calculator = (props) => {
    const [result, setResult] = useState("")
    let num1
    let num2

    const convertToInt = (num) =>{
        return parseInt(num)
    }
    const handleNum = (e,num) => {

        
        // console.log(e.target.value)
        if (num === num1){
            num1=e.target.value
            // num1.parseInt()
            convertToInt(num1)
            // console.log(num1)
        }else {

            num2=e.target.value
            convertToInt(num2)
            console.log(num2)
        }
        // console.log(num1)
        // console.log(num2)
    }
    const handleSolution = (num1, num2) => {
        const sum = num1 + num2
        
        setResult(sum)
    }

    return (
        <div className="container">
            <div className="add">
                <input type="text" 
                    placeholder="Enter a number" 
                    name="num1"
                    value={result}
                    onChange={(e) => handleNum(e, 'num1')}
                />
                <span>+</span>
                <input type="text" 
                    placeholder="Enter a number" 
                    name="num2"
                    value={result}
                    onChange={(e) => handleNum(e, 'num2')}
                />
                <button onClick={handleSolution}>=</button>
            </div>
            <h3 className="results">Results go here!</h3>
        </div>

    )
}

export default Calculator
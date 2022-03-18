import React, {useState} from 'react'

const Calculator = (props) => {
    const [result, setResult] = useState("")
    let num1
    let num2
    const handleNum = (e,num) => {
        // console.log(num)
        // console.log(e.target.value)
        if (num === num1){
            num1=e.target.value
        }else{
            num2=e.target.value
        }
        console.log(num1)
        console.log(num2)
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
                <button>=</button>
            </div>
            <h3 className="results">Results go here!</h3>
        </div>

    )
}

export default Calculator
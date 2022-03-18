import { useState } from "react"

const Calculator = (props) => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [results, setResults] = useState("");
    
    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if(num === 'num1') {
            setNum1(e.target.value)
        } else {
            setNum2(e.target.value)
        }
    }

    const handleResult = () => {
        console.log(num1, num2)
        if(num1 !== "" && num2 !== "") {
            let sum = (parseInt(num1) + parseInt(num2))
            setResults(sum)
            setNum1('')
            setNum2('')
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input 
                    type="number"
                    name="num1" 
                    placeholder="Enter a number"
                    value={ num1 }
                    onChange={(e) => handleNum(e, 'num1')} 
                    />
                <span>+</span>
                <input 
                    type="number"
                    name="num2" 
                    placeholder="Enter a number"
                    value={ num2 }
                    onChange={(e) => handleNum(e, 'num2')} 
                    />
                <button onClick={() => handleResult()}>=</button>
                
            </div>
            <h3 className="results">Results go here!</h3>
        </div>

        

    )
}

export default Calculator
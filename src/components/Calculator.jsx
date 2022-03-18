import React from "react"
import { useState } from "react"

const Calculator = (props) => {

    const [num1, setNum1] = useState([''])
    const [num2, setNum2] = useState([''])
    const [results, setResult] = useState([''])

    const handleNum = (e, num) => {
        console.log(e.target.value)
        if (num === num1) {
            setNum1(e.target.value)
        } else if (num === num2) {
            setNum2(e.target.value)
        }
        // console.log(num)
    }

    const handleSolution = () => {
        if (num1 !== '' && num2 !== '')
            if (num1.lenght > 0 && num2.length > 0) {
                setResult(parseInt(num1) + parseInt(num2))
            }
    }

    return (
        <div className="container">
            <div className="add">
                <input
                    type="number"
                    name="num1"
                    placeholder="Enter a number"
                    value={props.value}
                    onChange={(e) => handleNum(e, 'num1')}
                />
                <span>+</span>
                <input
                    type="number"
                    name="num2"
                    placeholder="Enter a number"
                    value={props.value}
                    onChange={(e) => handleNum(e, 'num2')}
                />
                <button onClick={() => handleSolution()}>
                    =
                </button>
            </div>
            <h3 className="results">{results}</h3>
        </div>
    )
}

export default Calculator
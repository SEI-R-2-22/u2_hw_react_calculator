import { useState } from 'react'

const Calculator = () => {

    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [results, setResults] = useState('')

    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)

        if (num === 'num1') {
            setNum1(e.target.value)
        } else {
            setNum2(e.target.value)
        }
    }

    const handleSolutionAdd = () => {
        if (num1 !== '' && num2 !== '') {
            setResults(parseInt(num1) + parseInt(num2))
        }
    }

    const handleSolutionSub = () => {
        if (num1 !== '' && num2 !== '') {
            setResults(parseInt(num1) - parseInt(num2))
        }
    }

    const handleSolutionMul = () => {
        if (num1 !== '' && num2 !== '') {
            setResults(parseInt(num1) * parseInt(num2))
        }
    }

    const handleSolutionDiv = () => {
        if (num1 !== '' && num2 !== '') {
            setResults(parseInt(num1) / parseInt(num2))
        }
    }

    return (
        <div className="container">
            <div className="add">
            <input
                type="number"
                name="num1"
                placeholder="Enter your first number"
                onChange={(e) => handleNum(e, 'num1')}
            />
                <span>+</span>
            <input
                type="number"
                name="num2"
                placeholder="Enter your second number"
                onChange={(e) => handleNum(e, 'num2')}
            />
                <button onClick={() => handleSolutionAdd()}>=</button>
            </div>


            <div className="subtract">
            <input
                type="number"
                name="num1"
                placeholder="Enter your first number"
                onChange={(e) => handleNum(e, 'num1')}
            />
                <span>-</span>
            <input
                type="number"
                name="num2"
                placeholder="Enter your second number"
                onChange={(e) => handleNum(e, 'num2')}
            />
                <button onClick={() => handleSolutionSub()}>=</button>
            </div>


            <div className="multiply">
            <input
                type="number"
                name="num1"
                placeholder="Enter your first number"
                onChange={(e) => handleNum(e, 'num1')}
            />
                <span>*</span>
            <input
                type="number"
                name="num2"
                placeholder="Enter your second number"
                onChange={(e) => handleNum(e, 'num2')}
            />
                <button onClick={() => handleSolutionMul()}>=</button>
            </div>


            <div className="divide">
            <input
                type="number"
                name="num1"
                placeholder="Enter your first number"
                onChange={(e) => handleNum(e, 'num1')}
            />
                <span>/</span>
            <input
                type="number"
                name="num2"
                placeholder="Enter your second number"
                onChange={(e) => handleNum(e, 'num2')}
            />
                <button onClick={() => handleSolutionDiv()}>=</button>
            </div>


            <h3 className="results">{results}</h3>
        </div>
    )
}

export default Calculator
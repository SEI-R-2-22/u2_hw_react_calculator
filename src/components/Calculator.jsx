import { useState } from "react"

function Calculator() {
    const { firstNumber, setFirstNumber } = useState('')
    const { secondNumber, setSecondNumber } = useState('')
    const { thirdNumber, setThirdNumber } = useState('')
    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
    }
    const addNum = () => {
        document.querySelector('.results').innerHTML = Number(firstNumber) + Number(secondNumber)

    }

    return (
        <div className="container">
            <div className="add">
                <input type="text"
                    name='num1'
                    placeholder="Enter your first number"
                    value={setFirstNumber}
                    onChange={(e) => setFirstNumber(e, 'num1')}
                />
                <span>+</span>
                <input type="text"
                    name='num2'
                    placeholder="Enter your second number"
                    value={setSecondNumber}
                    onChange={(e) => setSecondNumber(e, 'num2')}
                />
                < button onClick={() => addNum()}>=</button >
            </div>
            <h3 className="results">Results go here!</h3>
        </div>
    )
}


export default Calculator
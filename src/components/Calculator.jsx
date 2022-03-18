import { useState } from 'react'

const Calculator = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const changeNumber = (e, num) => {

        if (num === 'num1') {
            setNum1(e.target.value)

        } else if (num === 'num2') {
            setNum2(e.target.value)

        }
        console.log(num1)
        console.log(num2)



    }

    const handleSolution = () => {
        console.log('we made it')
        if (num1 && num2 != '') {
            let sum = parseInt(num1) + parseInt(num2)
            console.log(sum)
            setResult(sum)
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input type="text" name='num1' placeholder="Enter a number" onChange={(e) => changeNumber(e, 'num1')} value={num1} />
                <span>+</span>
                <input type="text" name='num2' placeholder="Enter a number" onChange={(e) => changeNumber(e, 'num2')} value={num2} />
                <button onClick={handleSolution}>=</button>
            </div>
            <h3 className="results" value={result} >{result}</h3>
        </div>
    )

}

export default Calculator
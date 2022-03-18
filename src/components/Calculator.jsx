import { useState } from 'react'

const Calculator = (props) => {

    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const [operator, setOperator] = useState('')
    const [answer, calc] = useState('')


    //addNum was re-written for Bonus prompt #4: solution without the useState variable for a result
    const addNum = () => {
        document.querySelector('.results').innerHTML = Number(inputValue1) + Number(inputValue2)
    }

    const subtNum = () => {
        calc(Number(inputValue1) - Number(inputValue2))
    }

    const multNum = () => {
        calc(Number(inputValue1) * Number(inputValue2))
    }

    const divNum = () => {
        calc(Number(inputValue1) / Number(inputValue2))
    }

    const handleNum = (e) => {
        if (isNaN(inputValue1) || isNaN(inputValue2)) {
            alert('Please enter a value for both fields')
        } else if (operator === '+') {
            addNum()
        } else if (operator === '-') {
            subtNum()
        } else if (operator === '*') {
            multNum()
        } else if (operator === '/') {
            divNum()
        } else {
            alert('Please enter an arithmetic operator to calculate')
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input type="text" placeholder="Enter a number" 
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                />
                <input type='text' className='operator' placeholder=''
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                />
                <input type="text" placeholder="Enter a number"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
                />
                <button onClick={handleNum}>=</button>
            </div>
        <h3 className="results">{answer}</h3>
        </div>
    )
}

export default Calculator
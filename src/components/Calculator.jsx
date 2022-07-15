import React from 'react'
import { useState } from 'react'

const Calculator = () => {

    const [calculate, setCalculate] = useState('')
    
    return(
        <div className="container">
            <div className="add">
            <input type="text" placeholder="Enter a number" />
            <span>+</span>
            <input type="text" placeholder="Enter a number" />
            <button>=</button>
            </div>
            <h3 className="results">Results go here!</h3>
        </div>
    )
}

export default Calculator
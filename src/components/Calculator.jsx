import { useState } from 'react'


const Calculator = (props) => {
const [first, setFirst] = useState('')
const [second, setSecond] = useState('')
const [result, setResult] = useState('')

const handleChange = (e, num) => {
//   if (num === 'first') {
//     setFirst(e.target.value)
//   } else if (num === 'second') {
//     setSecond(e.target.value)
//   }
    num === 'first' ? setFirst(e.target.value) : setSecond(e.target.value)
} 


const handleSolution = () => {
    //Is there a way I could write this into a ternary operator?
  if (first !== '' && second !== '') {
    setResult(parseInt(first) + parseInt(second))
    setFirst('')
    setSecond('')
  } 
}

  return (
    <div className="container">
        <div className="add">
            <input
                type="number"
                name='num1'
                placeholder="Enter a number"
                value={first} 
                onChange={(e) => handleChange(e, 'first')}
            />

            <span>+</span>

            <input
                type="number"
                name='num2'
                placeholder="Enter a number"
                value={second} 
                onChange={(e) => handleChange(e, 'second')}
            />

            <button onClick={() => handleSolution()}>=</button>
        </div>
        <h3 className="results">{result}</h3>
    </div>
  )

}

export default Calculator
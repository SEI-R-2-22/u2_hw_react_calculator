import { useState } from 'react'

const Calculator = () => {
  const [num1, setNumber1] = useState('')
  const [num2, setNumber2] = useState('')
  const [result, setResult] = useState('Results go here!')

  const handleNum = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    setNumber1(e.target.value)
  }
  const handleNum1 = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    setNumber2(e.target.value)
  }
   const handleSolution = () => {
    const result = parseInt(num1) + parseInt(num2)
    if (isNaN(result)) {
      alert('Not a number')
    }
    setResult(result)
    setNumber1('');
    setNumber2('');
   }

    return(
        <div className="container">
        <div className="add">
          <input
            type="text"
            name="num1"
            placeholder="Enter a number"
            value={num1}
            onChange={(e) => handleNum(e, 'num1')}
            />
          <span>+</span>
          <input
            type="text"
            name="num2"
            placeholder="Enter a number"
            value={num2}
            onChange={(e) => handleNum1(e, 'num2')}
            />
          <button onClick={() => handleSolution()}>=</button>
          
        </div>
        <h3 className="results">{ result }</h3>
      </div> 
    ) 
}

export default Calculator
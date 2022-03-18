import { useState } from "react"

const AltCalculator = () => {
  
  const [someState, setSomeState] = useState({firstNumber: '', secondNumber: '', result: ''})
    //This was me trying to use an object in state. 

  const handleNum = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    if (num === 'firstNumber') {
      setSomeState(someState.firstNumber = e.target.value) //not right, Glenn said look up how to manipulate objects in state in a functional component. 
      console.log(someState)
    } else if (num === 'secondNumber') {
      setSomeState(someState.secondNumber = e.target.value)
      console.log(someState)
    }
  }

  // function handleSolution() {
  //   if (firstNumber && secondNumber !== '') {
  //     setResult((parseInt(firstNumber) + parseInt(secondNumber)))
  //     setFirstNumber('')
  //     setSecondNumber('')
  //   }
  // }

  return (
    <div className="container">
      <div className="add">
        <input 
          type="text"
          name="firstNumber"
          placeholder="Enter your first number" 
          value={someState.firstNumber}
          onChange={(e) => handleNum(e, 'firstNumber')}
        />
        <span>+</span>
        <input 
          type="text"
          name="secondNumber" 
          placeholder="Enter your second number"
          value={someState.secondNumber}
          onChange={(e) => handleNum(e, 'secondNumber')}
        />
        <button 
        // onClick={() => handleSolution()}
        >=</button>
      </div>
      <h3 className="results">{someState.result}</h3>
    </div>
  )
}

export default AltCalculator
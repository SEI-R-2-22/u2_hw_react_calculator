import { useState, useEffect } from 'react'
import './App.css'
import Calculator from './components/Calculator'

const App = () => {
  const operator = ['+', '-', '*', '/']

  const [FirstNum, setFirstNum] = useState(0)
  const [SecondNum, setSecondNum] = useState(0)
  const [result, setResult] = useState('')
  const [operators, setOperators] = useState('+')
  const [increment, setIncrement] = useState(0)

  //clear input after 5 second of result.
  useEffect(() => {
    setTimeout(clearInput, 5000)
    // clearInput()
  }, [result])

  //comment out for equal sign for result.
  useEffect(() => {
    returnSum()
  }, [FirstNum, SecondNum, operators])

  const handleFirstInput = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value = ''
      alert('needs a num')
    } else {
      setFirstNum(e.target.value)
    }
  }
  const handleSecondInput = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value = ''
      setResult('Need A Number')
    } else {
      setSecondNum(e.target.value)
    }
  }

  //clear input after result is shown
  const clearInput = (e) => {
    setFirstNum('')
    setSecondNum('')
  }

  const returnSum = () => {
    if (FirstNum === '' || SecondNum === '') {
      return
    }
    switch (operators) {
      case '+':
        setResult(parseInt(FirstNum) + parseInt(SecondNum))
        break
      case '-':
        setResult(parseInt(FirstNum) - parseInt(SecondNum))
        break
      case '*':
        setResult(parseInt(FirstNum) * parseInt(SecondNum))
        break
      case '/':
        setResult(parseInt(FirstNum) / parseInt(SecondNum))
        break
    }
  }

  //click operator to change operation
  const changeOperator = () => {
    if (increment < 3) {
      setIncrement((prevState) => prevState + 1)
      setOperators(operator[increment])
    } else {
      setIncrement(0)
      setOperators(operator[increment])
    }
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Calculator
        handleFirstInput={handleFirstInput}
        handleSecondInput={handleSecondInput}
        returnSum={returnSum}
        result={result}
        clearInput={clearInput}
        FirstNum={FirstNum}
        SecondNum={SecondNum}
        changeOperator={changeOperator}
        operators={operators}
      />

      {/* Your <Calculator /> component here */}
    </div>
  )
}

export default App

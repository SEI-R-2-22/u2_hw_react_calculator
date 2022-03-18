import { useState, useEffect } from 'react'
import './App.css'
import Calculator from './components/Calculator'

const App = () => {
  const operator = ['+', '-', '*', '/']

  const [FirstNum, setFirstNum] = useState(0)
  const [SecondNum, setSecondNum] = useState(0)
  const [result, setResult] = useState('')

  // useEffect(() => {
  //   returnSum()
  // }, [SecondNum, FirstNum])

  useEffect(() => {
    clearInput()
  }, [result])

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

  const clearInput = (e) => {
    setFirstNum('')
    setSecondNum('')
  }

  const returnSum = () => {
    if (FirstNum === '' || SecondNum === '') {
      return
    }
    setResult(parseInt(FirstNum) + parseInt(SecondNum))
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
      />

      {/* Your <Calculator /> component here */}
    </div>
  )
}

export default App

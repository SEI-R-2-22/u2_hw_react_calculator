import './App.css'
import Calculator from './components/Calculator'
import { useState } from 'react'

const App = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [totalNumber, setTotalNumber] = useState(0)
  const [sign, setSign] = useState('')

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <Calculator
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        totalNumber={totalNumber}
        setFirstNumber={setFirstNumber}
        setSecondNumber={setSecondNumber}
        setTotalNumber={setTotalNumber}
        sign={sign}
        setSign={setSign}
      />
    </div>
  )
}

export default App

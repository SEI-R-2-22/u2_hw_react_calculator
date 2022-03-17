import './App.css'
import Calculator from './components/Calculator'
import { useState } from 'react'

const App = () => {
  const[num1, setNum1] = useState('')
  const[num2, setNum2] = useState('')
  const[operator, setOperator] = useState('')
  const[result, setResult] = useState('')

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Calculator
          num1 = { num1 }
          setNum1 = { setNum1 }
          num2 = { num2 }
          setNum2 = { setNum2 }
          operator = { operator }
          setOperator = { setOperator }
          result = { result }
          setResult = { setResult }
      />
    </div>
  )
}

export default App

import './App.css'
import Calculator from './components/Calculator'
import { useState } from 'react'

const App = () => {
  
  const [num, handleNum] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <Calculator/>
    </div>
  )
}

export default App

import {useState} from 'react'

const Calculator = () => {
  const [firstnum, setFirstnum] = useState(null)
  const [secondnum, setSecondnum] = useState(null)
  const [result, setResult] = useState(null)

  const handleNum = (e, num) => {
      if(num === "firstnum"){setFirstnum(e.target.value) }
      else {setSecondnum(e.target.value)
  }
}
  const handleSolution = () => {
    if(firstnum && secondnum){
      let num1 = parseInt(firstnum)
      let num2 = parseInt(secondnum)
      let finalResult = num1 + num2
      setResult(finalResult)
    }
  }

  return(
  <div className="container">
  <div className="add">
    <input 
    type="number"
    name="firstnum"
    value={firstnum}
    onChange={(e) => handleNum(e, 'firstnum')}
    placeholder="Enter a number" 
    />
    <span>+</span>
    <input     
    type="number"
    name="secondnum"
    value={secondnum}
    onChange={(e) => handleNum(e, 'secondnum')}
    placeholder="Enter a number"  />
    <button onClick={()=>handleSolution()}>=</button>
  </div>
  <h3 className="results">{result}</h3>
</div>
  )
}
export default Calculator
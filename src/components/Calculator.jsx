const Calculator = (props) => {

return (
  <div className='container'>
    <div className='add'>
      <input type='text' name='firstNum' value={props.FirstNum} onChange={props.handleFirstInput} placeholder='Enter a number'></input>
      <span>+</span>
      <input type='text' name='SecondNum'  onChange={props.handleSecondInput} value={props.SecondNum} placeholder='Enter a number'></input>
      <button onClick={props.returnSum} >=</button>
    </div>
    <h3 className='results'>{props.result}</h3>
  </div>
)

}

export default Calculator
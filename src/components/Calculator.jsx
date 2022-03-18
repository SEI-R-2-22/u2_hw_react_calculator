const Calculator = ({
  firstNumber,
  secondNumber,
  totalNumber,
  setFirstNumber,
  setSecondNumber,
  setTotalNumber,
  sign,
  setSign
}) => {
  const handleInput = (e, num) => {
    if (num === 'First Number') {
      setFirstNumber(e.target.value)
    } else if (num === 'Second Number') {
      setSecondNumber(e.target.value)
    } else if (num === 'Math Operator') {
      setSign(e.target.value)
    }
  }
  const handleSolution = () => {
    if (
      isNaN(firstNumber) === true ||
      isNaN(secondNumber) === true ||
      firstNumber === '' ||
      secondNumber === ''
    ) {
      setTotalNumber('Please enter two numbers')
    } else if (isNaN(firstNumber) === false && isNaN(secondNumber) === false) {
      switch (sign) {
        case '+':
          setTotalNumber(parseInt(firstNumber) + parseInt(secondNumber))
          setFirstNumber('')
          setSecondNumber('')
          setSign('')
          break
        case '-':
          setTotalNumber(parseInt(firstNumber) - parseInt(secondNumber))
          setFirstNumber('')
          setSecondNumber('')
          setSign('')
          break
        case '*':
          setTotalNumber(parseInt(firstNumber) * parseInt(secondNumber))
          setFirstNumber('')
          setSecondNumber('')
          setSign('')
          break
        case '/':
          setTotalNumber(parseInt(firstNumber) / parseInt(secondNumber))
          setFirstNumber('')
          setSecondNumber('')
          setSign('')
          break
        default:
          setTotalNumber('Please enter +, -, *, / as an operator')
      }
    }
  }

  return (
    <div className="container">
      <div className="add">
        <input
          type="text"
          placeholder="Number"
          value={firstNumber}
          onChange={(e) => handleInput(e, 'First Number')}
        />
        <span>
          <input
            type="text"
            placeholder="Operator"
            value={sign}
            onChange={(e) => handleInput(e, 'Math Operator')}
          />
        </span>
        <input
          type="text"
          placeholder="Number"
          value={secondNumber}
          onChange={(e) => handleInput(e, 'Second Number')}
        />
        <button onClick={() => handleSolution()}>=</button>
      </div>
      <h3 className="results">{totalNumber}</h3>
    </div>
  )
}

export default Calculator

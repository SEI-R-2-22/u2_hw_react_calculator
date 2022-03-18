import React, { useState } from 'react';

function Calculator(props) {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  function handleNum(e, num) {
    num === "num1" ? setNum1(e.target.value) : setNum2(e.target.value);
  } 

  function handleOperator(e) {
    setOperator(e.target.value);
    // console.log(e.target.value);
  }

  function calculate() {
    console.log(isNaN("123a"));
    if (isNaN(num1) || isNaN(num2)) setResult("Please enter only numbers");    
    else setResult(eval(parseInt(num1) + operator + parseInt(num2)));
      // setNum1("");
      // setNum2("");
    
  }

  return (
    <div className="container">
    <div className="add">
      <input type="text" placeholder="Enter a number" 
        value={num1} onChange={(e) => handleNum(e, 'num1')} 
      />
      <select name="operator" onChange={(e) => handleOperator(e)}>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      </select>
      <input type="text" placeholder="Enter a number" 
        value={num2} onChange={(e) => handleNum(e, 'num2')}
      />
      <button onClick={calculate}>=</button>
    </div>
    <h3 className="results"> 
      {/* {result ? result : <p>Enter two numbers <br />  then press the = button</p>} */}
      {num1==="" || num2==="" || (isNaN(num1) || isNaN(num2)) 
      ? 
      "Please enter two numbers" 
      :     
      eval(parseInt(num1) + operator + parseInt(num2))
      }
    </h3>
  </div>
  );
}

export default Calculator;
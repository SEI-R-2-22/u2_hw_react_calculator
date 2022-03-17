import { useState } from 'react'

const Calculator = (props) => {

    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [result, setResult] = useState("");
    const [operation, setOperation] = useState("+");
    
    const handleNum = (e, num) => {
        if (num === 'firstNum') {
            setFirstNum(e.target.value);
        } else {
            setSecondNum (e.target.value);
        }
    }

    const handleSolution = () => {
        if (firstNum.length > 0 && secondNum.length > 0){
            switch (operation) {
                case "+":
                    setResult(parseInt(firstNum) + parseInt(secondNum));
                    break;
                case "-":
                    setResult(parseInt(firstNum) - parseInt(secondNum));
                    break;
                case "*":
                    setResult(parseInt(firstNum) * parseInt(secondNum));
                    break;
                case "/":
                    setResult(parseInt(firstNum) / parseInt(secondNum));
                    break;
                default:
                    console.log("Some kind of error....");
            }
        }
    }

    // changes to a different operation when you click the button
    const traverseOperation = () => {
        switch (operation) {
            case "+":
                setOperation("-")
                break;
            case "-":
                setOperation("*")
                break;
            case "*":
                setOperation("/")
                break;
            case "/":
                setOperation("+")
                break;
            default:
                console.log("Some kind of error....");
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input
                type="number"
                name="firstNum"
                placeholder="Enter first number"
                value={firstNum}
                onChange={(e) => handleNum(e, 'firstNum')}
                />
                <button id = "operation" onClick = {() => traverseOperation()}>{operation}</button>
                <input
                type="number"
                name="secondNum"
                placeholder="Enter second number"
                value={secondNum}
                onChange={(e) => handleNum(e, 'secondNum')}
                />
                <button onClick ={() => handleSolution()}>=</button>
            </div>
            <h3 className="results">{result}</h3>
        </div>
    )

}

export default Calculator;




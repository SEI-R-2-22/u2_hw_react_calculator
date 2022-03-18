const Calculator = (props) => {
    let num1
    let num2
    
    const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)
        if(num1) {
            num1 = e.target.value
        } else {
            num2 = e.target.value
        }
    }

    const setResult = () => {
        if(num1 !== "" && num2 !== "") {
            let sum = (parseInt(num1) + parseInt(num2))
            sum = setResult
            num1 = ""
            num2 = ""
        }
    }

    return (
        <div className="container">
            <div className="add">
                <input 
                    type="number"
                    name="num1" 
                    placeholder="Enter a number"
                    value={ props.num }
                    onChange={(e) => handleNum(e, 'num1')} 
                    />
                <span>+</span>
                <input type="number" placeholder="Enter a number" />
                <button onClick={(sum) => setResult()}>=</button>
                
            </div>
            <h3 className="results">Results go here!</h3>
        </div>

        

    )
}

export default Calculator
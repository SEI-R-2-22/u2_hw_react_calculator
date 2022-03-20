
const Calculator = () => {
    return(
        <div className="container">
        <div className="add">
          <input type="text" placeholder="Enter a number" />
          <span>+</span>
          <input type="text" placeholder="Enter a number" />
          <button>=</button>
          <input
            type="number"
            name="num1"
            placeholder="Enter your first number"
            value={someStateVariable}
            onChange={(e) => handleNum(e, 'num1')}
            />
        </div>
        <h3 className="results">Results go here!</h3>
      </div> 
    ) 
}

export default Calculator
import { useState } from "react"

const B3 = ({nextStep}) =>{
    let options=["Yes", "No", "Not Sure"];
    const [option, setOption] = useState();

    let skinTypes=["Dry", "Oily", "Combination", "Sensitive", "Normal"];
    const [skinType, setSkinType] = useState();

    return (
      <div className="B3-container">
        <header>
         <h1>Great! Let's compare assumptions</h1>
         <h2>According to your answers, I can assume that you have skin type</h2>
        </header>
        <div>
        <p>Do you agree?</p>
        {options.map(result=>(
          <>
          <input type="radio" value={result} name="radioValues"
          onChange={(e)=>setOption(e.target.value)}/>
          <label>{result}</label>
          </>
          ))}
        </div> 
        {option === "No" || option === "Not Sure" ?  
        <div>
          <p>Then what kind of skin do you think you have?</p>
          {skinTypes.map(result=>(
          <>
          <input type="radio" value={result} name="radioValues2"
          onChange={(e)=>setSkinType(e.target.value)}/>
          <label>{result}</label>
          </>
          ))}
        </div> : ""}
        <button onClick={nextStep}>Next</button>
      </div>
      );
}

export default B3
import { useState } from "react"

const B3 = ({nextStep}) =>{
    let options=["Yes", "No", "Not Sure"];
    const [option, setOption] = useState();

    let skinTypes=["Dry", "Oily", "Combination", "Sensitive", "Normal"];
    const [skinType, setSkinType] = useState();

    return (
      <div className="B3-container">
        <header>
         <h1 className="title">Great! Let's compare assumptions</h1>
         <p className="subtitle">According to your answers, I can assume that you have skin type</p>
        </header>
        <div className="B3-grid-container">
        <div>
        <p className="question">Do you agree?</p>
        </div>
        <div>
        {options.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} name="radioValues1"
          onChange={(e)=>setOption(e.target.value)}/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        {option === "No" || option === "Not Sure" ?  
        <div>
          <p className="question">Then what kind of skin do you think you have?</p>
          {skinTypes.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues2"
          onChange={(e)=>setSkinType(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
        </div> : ""}
        <button className="btn" onClick={nextStep}>Next</button>
      </div>
      </div>
      );
}

export default B3
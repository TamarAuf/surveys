import { useState } from "react"

const B3 = ({nextStep}) =>{
    let agreeOptions=["Yes", "No", "Not Sure"];
    const [agree, setAgree] = useState();

    let skinTypes=["Dry", "Oily", "Combination", "Sensitive", "Normal"];
    const [skinType, setSkinType] = useState();

    return (
      <div className="B3-container">
        <header>
         <h1 className="title">Great! Let's compare assumptions</h1>
         <h2 className="subtitle">According to your answers, I can assume that you have skin type</h2>
        </header>
        <form className="form"> 
        <div>
        <label className="question">Do you agree?</label>
        </div>
        <div>
        {agreeOptions.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} name="radioValues1"
          onChange={(e)=>setAgree(e.target.value)}/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        {agree === "No" || agree === "Not Sure" ?  
        <div>
          <label className="question">Then what kind of skin do you think you have?</label>
          {skinTypes.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues2"
          onChange={(e)=>setSkinType(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
        </div> : ""}
        </form>
        <button className="btn" onClick={nextStep}>Next</button>
      </div>
      );
}

export default B3
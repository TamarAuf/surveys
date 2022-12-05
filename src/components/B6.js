import { useState } from "react"

const B6 = ({handleChange, nextStep, setResponses, responses, questions, options}) =>{

    return (
      <div className="B6-container">
        <header>
         <h1 className="title">All right, [Name], one last step to go</h1>
         <p className="subtitle">Lifestyle has a great impact on skin condition. That’s why I’m going to ask <br />
         you several questions on your every day habits.</p>
        </header>
        <div className="B6-grid-container">
        <div>
        <p className="question">Do you smoke?</p>
        </div>
        <div>
        {options.smoke.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
          onChange={(e)=>handleChange(e)} name="smoke"/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        <div>
        <p className="question">Are you allergic to one of these <br /> items?</p>
        </div>
        <div>
        {options.allergy.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="checkbox" value={result} 
          onChange={(e)=>handleChange(e)} name="allergy"/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        <div>
        <p className="question">Are you currently in one of <br /> these circumstances?</p>
        </div>
        <div>
        {options.circumstance.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
          onChange={(e)=>handleChange(e)} name="circumstance"/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        {responses.circumstance === "None of that" || responses.circumstance === "Prefer not to say" ?  
        <div>
          <p className="question">Are you taking a hormonal <br /> contraceptive?</p>
          {options.hormonal.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
          onChange={(e)=>handleChange(e)} name="hormonal"/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        <p className="question">What impact does it have on <br /> your skin?</p>
        {options.impact.map(result=>(
        <>
        <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
        onChange={(e)=>handleChange(e)} name="impact"/>
        <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
        </>
        ))}
      </div> : ""}
        <button className="btn" onClick={nextStep} style={{ left: 799, bottom: 120}}>Next</button>
      </div>
      </div>
      );
}

export default B6
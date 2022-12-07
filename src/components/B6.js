import { useState } from "react"

const B6 = ({handleChange, nextStep, setResponses, responses, questions, options}) =>{

    return (
      <div className="B6-container">
        <header>
         <h1 className="title">All right, {responses.name}, one last step to go</h1>
         <p className="subtitle">Lifestyle has a significant impact on skin condition. That’s why I’m going to ask <br />
         you several questions about your every day habits.</p>
        </header>
        <div className="B6-grid-container">
        <div>
        <p className="question">{questions[0]}</p>
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
        <p className="question">{questions[1]}</p>
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
        {responses.gender === "Male" ? "" :
        <div>
        <div>
        <p className="question">{questions[2]}</p>
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
          <p className="question">{questions[3]}</p>
          {options.hormonal.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
          onChange={(e)=>handleChange(e)} name="hormonal"/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        <p className="question">{questions[4]}</p>
        {options.impact.map(result=>(
        <>
        <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
        onChange={(e)=>handleChange(e)} name="impact"/>
        <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
        </>
        ))}
      </div> : ""}
      </div>}
        <button className="btn" onClick={nextStep} style={{ left: 799, bottom: 120}}>Next</button>
      </div>
      </div>
      );
}

export default B6
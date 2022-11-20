import { useState } from "react"

const B6 = ({nextStep}) =>{
    const smokeOptions=["Yes", "No", "Only on rare occasions"];
    const [smoke, setSmoke] = useState();

    let allergyOptions=["Item1", "Item2", "Item3"];
    const [allergy, setAllergy] = useState();

    const circumstances=["Pregnant", "Breastfeeding", "Menopause", "None of that", "Prefer not to say"];
    const [circumstance, setCircumstance] = useState();

    const hormonalOptions=["Yes", "No", "Prefer not to answer"];
    const [hormone, setHormone] = useState();

    const impactCheckboxOptions=["acne", "dry", "sensitive"];
    const [impactCheckbox, setImpactCheckbox] = useState();

    const impactOptions=["Better", "Worse"];
    const [impact, setImpact] = useState();

    return (
      <div className="B6-container">
        <header>
         <h1 className="title">All right, [Name], one last step to go</h1>
         <p className="subtitle">Lifestyle has a great impact on skin condition. That’s why I’m going to ask <br />
         you several questions on your every day habits.</p>
        </header>
        <div className="B6-grid-container">
        <div>
        <p className="question">Are you smoking?</p>
        </div>
        <div>
        {smokeOptions.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} name="radioValues1"
          onChange={(e)=>setSmoke(e.target.value)}/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        <div>
        <p className="question">Are you allergic to one of these <br /> items?</p>
        </div>
        <div>
        {allergyOptions.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="checkbox" value={result} name="radioValues2"
          onChange={(e)=>setAllergy(e.target.value)}/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        <div>
        <p className="question">Are you currently in one of <br /> these circumstances?</p>
        </div>
        <div>
        {circumstances.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} name="radioValues3"
          onChange={(e)=>setCircumstance(e.target.value)}/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        {circumstance === "None of that" || circumstance === "Prefer not to say" ?  
        <div>
          <p className="question">Are you taking a hormonal <br /> contraceptive?</p>
          {hormonalOptions.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} name="radioValues4"
          onChange={(e)=>setHormone(e.target.value)}/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        <p className="question">What impact does it have on <br /> your skin?</p>
        {impactOptions.map(result=>(
        <>
        <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} name="radioValues5"
        onChange={(e)=>setImpact(e.target.value)}/>
        <label style={{"position": "relative", "top": "0px"}} className="radio-options">
            {{result} === "acne" ? "Better" : "Worse"}
        </label>
        </>
        ))}
      </div> : ""}
        <button style={{"position": "relative", "top": "-30px", "right": "0px"}} className="btn" onClick={nextStep}>Next</button>
      </div>
      </div>
      );
}

export default B6
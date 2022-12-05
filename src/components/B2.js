import { useState } from "react"

const B2 = ({handleChange, nextStep, setResponses, responses, questions, options}) => {

    return (
        <div className="B2-container">
          <div className="hader">
            <h1 className="title">Nice to meet you, Name!</h1>
            <h2 className="subtitle">I want to help you to choose the most matching skin care <br />
            regimen for you. Please tell me a little about your skin.</h2>
          </div>

         <form className="form">  
         <div className="B2-grid-container">
         <div>
         <label className="question">{questions[0]}</label>
         </div>
         <div>
         {options.clean.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={(e)=>handleChange(e)} name="clean"/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[1]}</label>
          </div>
          <div>
          {options.winter.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={(e)=>handleChange(e)} name="winter"/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[2]}</label>
          </div>
          <div>
          {options.sun.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={(e)=>handleChange(e)} name="sun"/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[3]}</label>
          </div>
          <div>
          {options.sensitive.map(result=>(
          <>
          <input className="radio-buttons" type="checkbox" onChange={(e)=>handleChange(e)} name="sensitive"/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          </div>
          </form>
          <button className="btn" onClick={nextStep} style={{ left: 427, bottom: 120}}>Next</button>
        </div>
      
      );
}

export default B2
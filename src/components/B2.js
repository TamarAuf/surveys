import { useState } from "react"

const B2 = ({updateRadio, updateCheckbox, nextStep, responses, questions, options}) => {

    return (
        <div className="B2-container">
          <div className="hader">
            <h1 className="title">Nice to meet you, {responses.name}!</h1>
            <h2 className="subtitle">I want to help you choose the best skin care regimen for<br />
             you. Please tell me a little about your skin.</h2>
          </div>

         <form className="form">  
         <div className="B2-grid-container">
         <div>
         <label className="question">{questions[0]}</label>
         </div>
         <div>
         {options.clean.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={e=>updateRadio(e)} name="clean"/>
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
          <input className="radio-buttons" type="radio" value={result} onChange={e=>updateRadio(e)} name="winter"/>
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
          <input className="radio-buttons" type="radio" value={result} onChange={e=>updateRadio(e)} name="sun"/>
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
          <input className="radio-buttons" type="checkbox" onChange={e=>updateCheckbox(e)} name="sensitive"/>
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
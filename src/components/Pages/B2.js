import { useState } from "react"

const B2 = ({updateRadio, updateCheckbox, nextStep, responses, questions, options}) => {
    //array values: Dry, oily, sensitive
    const skinTypeScores = [0, 0, 0];
    //Dry/Oily/Combination, Sensitive/""
    let skinType = ["", ""];
    const updateScores = (index) => {
      skinTypeScores[index] += 1;
    }
    const calculateSkinType = () => {
      skinTypeScores[0] && skinTypeScores[1] >= 1 ? skinType[0] = "Combination" :
      skinTypeScores[0] >= 1 ? skinType[0] = "Dry" :
      skinTypeScores[1] >= 1 ? skinType[0] = "Oily" :
      skinType[0] = "Normal";
      skinTypeScores[2] >= 1 ? skinType[1] = "Sensitive" : skinType[1] = "";
    }
    return (
        <div className="B2-container">
          <div className="header">
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
          </>))}
          </div>
          {responses.clean === "Tight and dry" ? updateScores(0) : responses.clean === "Still greasy and shiny" ? updateScores(1) : ""}
          {console.log("log1 =" + skinTypeScores[0] + skinTypeScores[1] + skinTypeScores[2])}
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
          {responses.winter === "Yes" ? updateScores(0) : ""}
          {console.log("log2 =" + skinTypeScores[0] + skinTypeScores[1] + skinTypeScores[2])}
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
          {/* {responses.sensitive[0] === !null ? updateScores(2) : ""} */}
          {console.log("log3 =" + skinTypeScores[0] + skinTypeScores[1] + skinTypeScores[2])}
          </div>
          </form>
          {calculateSkinType()}
          {/* {updateSkinType} */}
          {console.log("log4 =" + skinTypeScores[0] + skinTypeScores[1] + skinTypeScores[2])}
          {console.log("type =" + skinType[0] + skinType[1])}
          <button className="btn" onClick={nextStep} style={{ left: 427, bottom: 120}}>Next</button>
        </div>
      
      );
}

export default B2
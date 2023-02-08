const B2 = ({updateRadio, updateCheckbox, updateSkinType, nextStep, responses, questions, options}) => {
    //array values: Dry, oily, sensitive
    let scores = [0, 0, 0];
    let skinType = "normal";
    let isSensitive = false;
    
    const calculateSkinType = () => {
      scores[0] && scores[1] >= 1 ? skinType = "combination" :
      scores[0] >= 1 ? skinType = "dry" :
      scores[1] >= 1 ? skinType = "oily" :
      skinType = "normal";
      scores[2] >= 1 ? isSensitive = true : isSensitive = false;
    }
    const updateScores = (index) =>{
      scores[index] = 1;
    }
    const clickResponse = () => {
      updateSkinType(skinType, isSensitive);
      nextStep();
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
          <input className="radio-buttons" type="radio" name="clean" value={result} 
          category="dry"
          onChange={e=>updateRadio(e)} />
          <label className="radio-options">{result}</label>
          </>))}
          </div>
          {responses.clean === "Tight and dry" ? updateScores(0) : responses.clean === "Still greasy and shiny" ? updateScores(1) : console.log("none")}
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
          {responses.winter === "Yes" ? updateScores(0) : console.log("none")}
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
          <input className="radio-buttons" type="checkbox" name="sensitive" value={result}
          onChange={e=>updateCheckbox(e)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          {Array.isArray(responses.sensitive) ? responses.sensitive[1] === "None of these" ?
                console.log("none of these") : updateScores(2) : console.log("not an array")
            }
          </div>
          </form>
          {calculateSkinType()}
          <button className="btn" onClick={clickResponse} style={{ left: 427, bottom: 120}}>Next</button>
        </div>
      
      );
}

export default B2
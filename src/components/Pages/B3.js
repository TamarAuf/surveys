

const B3 = ({updateRadio, updateSkinType, userScores, updateUserScores, nextStep, responses, questions, options}) =>{
  const clickResponse = () => {
    let finalSkinType = responses.skinType;
    let finalSensitive = responses.isSensitive;
    if(responses.agree === "No" || responses.agree === "Not Sure")
    {
      
      updateSkinType(responses.newSkinType.toLowerCase(), responses.newSensitive)
      //skinType doesn't update immediately
      finalSkinType = responses.newSkinType.toLowerCase();
      finalSensitive = responses.newSensitive;
    }
    switch(finalSkinType){
      case "dry": 
        updateUserScores("dry_skin", userScores.dry_skin += .1);
        updateUserScores("oily_skin", userScores.oily_skin -= .1);
        break;
      case "oily":
        updateUserScores("oily_skin", userScores.oily_skin += .1);
        updateUserScores("dry_skin", userScores.dry_skin -= .1);
        break;
      case "combination":
        updateUserScores("dry_skin", userScores.dry_skin += .1);
        updateUserScores("oily_skin", userScores.oily_skin += .1);
        break;
      case "normal":
        updateUserScores("dry_skin", userScores.dry_skin -= .1);
        updateUserScores("oily_skin", userScores.oily_skin -= .1);
        break;
      default:
        break;
    }
    finalSensitive === true || finalSensitive === "Yes" ? 
    updateUserScores("sensitive_skin", userScores.sensitive_skin += .1) : 
    updateUserScores("sensitive_skin", userScores.sensitive_skin -= .1);
    nextStep();
  }
    return (
      <div className="B3-container">
        <header>
         <h1 className="title">Great! Let's compare assumptions</h1>
         <h2 className="subtitle">According to your answers, I can assume that your skin is
         {responses.isSensitive ? " sensitive and" : ""}
         {responses.skinType === "dry" || responses.skinType === "oily" ? " " + responses.skinType : 
         responses.skinType === "combination" ? " a combination of dry and oily" : " neither dry nor oily"}
         </h2> 
        </header>
        <form className="B3-grid-container"> 
        <div>
        <label className="question">{questions[0]}</label>
        </div>
        <div>
        {options.agree.map(result=>(
          <>
          <input style={{"position": "relative", "top": "0px"}} className="radio-buttons" type="radio" value={result} 
          onChange={e=>updateRadio(e)} name="agree"/>
          <label style={{"position": "relative", "top": "0px"}} className="radio-options">{result}</label>
          </>
          ))}
        </div> 
        {responses.agree === "No" || responses.agree === "Not Sure" ?  
        <div>
          <div>
          <label className="question">{questions[1]}</label>
          {options.skinType.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={e=>updateRadio(e)} name="newSkinType"/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[2]}</label>
          {options.isSensitive.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={e=>updateRadio(e)} name="newSensitive"/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
        </div> : ""}
        </form>
        <button className="btn" onClick={clickResponse}>Next</button>
      </div>
      );
}

export default B3
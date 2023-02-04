

const B3 = ({updateRadio, updateSkinType, nextStep, responses, questions, options}) =>{
  const clickResponse = () => {
    responses.agree === "No" || responses.agree === "Not Sure" ? 
    updateSkinType(responses.newSkinType, responses.newSensitive) 
    : console.log("agreed");
    nextStep();
  }
    return (
      <div className="B3-container">
        <header>
         <h1 className="title">Great! Let's compare assumptions</h1>
         <h2 className="subtitle">According to your answers, I can assume that you have 
         {" " + responses.skinType} {responses.isSensitive ? "and sensitive" : ""} skin</h2>
        </header>
        <form className="B3-grid-container"> 
        <div>
        <label className="question">{questions[0]}</label>
        </div>
        {console.log("results " + responses.skinType + responses.isSensitive)}
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
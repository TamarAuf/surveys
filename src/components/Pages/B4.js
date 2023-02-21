

const B4 = ({updateCheckbox,updateRadio,userScores,updateUserScores,nextStep,skipStep,responses,questions,options}) => {
    const clickResponse = () => {
        if(Array.isArray(responses.ageRelated)) updateUserScores("aging", userScores.aging += (responses.ageRelated.length));
        if(Array.isArray(responses.acneRelated)) updateUserScores("acne", userScores.acne += responses.acneRelated.length);
        if(Array.isArray(responses.redness)) updateUserScores("rosacea", userScores.rosacea += responses.redness.length);
        if(Array.isArray(responses.flakes)) updateUserScores("dandruff", userScores.dandruff += responses.flakes.length);
        ((Array.isArray(responses.ageRelated)&&responses.ageRelated.includes("Pigmentation"))
        ||(Array.isArray(responses.acneRelated)&&responses.acneRelated.length>0)
        ||responses.facialHair==="I shave sometimes or as part of my daily skin care routine") ? nextStep() : skipStep();
      }
    
    return (
        <div className="B4-container">
        <h1 className="title">Perfect! I'm already getting skincare ideas for you, {responses.name}!</h1> 
        <h2 className="subtitle" style={{width: 616, height: 62, left:120,top: 168,marginTop:80}}>What are the signs you have or sometimes notice?<br/> 
        Select all the examples that fit</h2>  
        
        <form className="form">
        <div className="B2-grid-container">
       
        <div><label className="question">{questions[0]}</label></div>  
        <div>
        {options.ageRelated.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" name="ageRelated" value={result} 
         onChange={e=>updateCheckbox(e,responses.ageRelated)}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
         
        <div><label className="question">{questions[1]}</label></div>
        <div>
        {options.acneRelated.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" name="acneRelated" value={result} 
        onChange={e=>updateCheckbox(e,responses.acneRelated)}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
        
        <div><label className="question">{questions[2]}</label> </div>
        <div>
        {options.redness.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" name="redness" value={result} 
        onChange={e=>updateCheckbox(e,responses.redness)}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>

        <div><label className="question">{questions[3]}</label> </div>
        <div>
        {options.flakes.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" name="flakes" value={result} 
        onChange={e=>updateCheckbox(e,responses.flakes)}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
        
        <div><label className="question">{questions[4]}</label></div>
        <div>
        {options.facialHair.map(result=>(
        <>
        <input className="radio-buttons" type="radio" value={result} 
         onChange={e=>updateRadio(e)} name="facialHair"/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
        </div>
        </form>

        <button className="btn" style={ {marginLeft: 500}} onClick={clickResponse}>Next</button> 
        </div> 
    );
}


export default B4
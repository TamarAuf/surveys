
const Pigmentation = ({responses,pigmentation, updateRadio, updateCheckbox}) =>{
    
    return(
            <div> 
            <h2 className="subtitle">You mentioned you have pigmentation, let's learn more</h2>

            <form className="form" style={{marginTop:50}}> 
            <div className="B2-grid-container">   
            <div><label>{pigmentation.questions[0]}</label></div>
            <div>
            {pigmentation.problem.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" name="problem" value={result} 
            onChange={e=>updateCheckbox(e,responses.problem)}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            
            <div><label>{pigmentation.questions[1]}</label></div>
            <div>
            {pigmentation.sunExposure.map(result=>(
            <>
            <input className="radio-buttons" type="radio" name="sunExposure" value={result} 
            onChange={e=>updateRadio(e)}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            
            <div><label>{pigmentation.questions[2]}</label></div>
            <div>
            {pigmentation.otherFactor.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" name="otherFactor" value={result} 
            onChange={e=>updateCheckbox(e,responses.otherFactor)}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            </div>
            </form>
            </div>
    );
}


export default Pigmentation

const Pigmentation = ({pigmentation}) =>{
    
    return(
            <div> 
            <h2 className="subtitle">You mentioned you have acne,let's learn more</h2>

            <form className="form" style={{marginTop:50}}> 
            <div className="B2-grid-container">   
            <div><label>{pigmentation.questions[0]}</label></div>
            <div>
            {pigmentation.problem.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            
            <div><label>{pigmentation.questions[1]}</label></div>
            <div>
            {pigmentation.sunExposure.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            
            <div><label>{pigmentation.questions[2]}</label></div>
            <div>
            {pigmentation.skinReact.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
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
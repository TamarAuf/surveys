
const Pigmentation = ({pigmentation}) =>{
    
    return(
            <div> 
            <form className="form" style={{marginTop:150}}>
            <h1>You mentioned you have acne,let's learn more</h1>    
            <label>{pigmentation.questions[0]}</label>
            {pigmentation.problem.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>{pigmentation.questions[1]}</label>
            {pigmentation.sunExposure.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>{pigmentation.questions[2]}</label>
            {pigmentation.skinReact.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            <br/>
            </form>
            </div>
    );
}


export default Pigmentation
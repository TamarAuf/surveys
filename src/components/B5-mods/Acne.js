
const Acne = ({acne}) =>{
    
    return(
            <div> 
           
            <h2 className="subtitle">You mentioned you have acne,let's learn more</h2>

            <form className="form">
            <div className="B2-grid-container"> 
            <div><label className="question">{acne.questions[0]}</label></div>
            <div>
            {acne.pimpels.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            
            <div><label className="question">{acne.questions[1]}</label></div>
            <div>
            {acne.changes.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            </div>
            
           <div><label className="question">{acne.questions[2]}</label></div>
            <div>
            {acne.skinReact.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
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

export default Acne
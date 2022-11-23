
const Acne = ({acne}) =>{
    
    return(
            <div> 
            <form className="form">
            <h1>You mentioned you have acne,let's learn more</h1>    
            <label>{acne.questions[0]}</label>
            {acne.pimpels.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>{acne.questions[1]}</label>
            {acne.changes.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>{acne.questions[2]}</label>
            {acne.skinReact.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}
            <br/>
            </form>
            </div>
    );
}

export default Acne


const Shave = ({shave}) =>{

    
    return(<div> 
       
        <h2 className="subtitle">You mentioned you shave,let’s learn more</h2>

        <form className="form" style={{marginTop:50}}>
        <div className="B2-grid-container">    
        <div><label>{shave.questions[0]}</label></div>
        <div>
        {shave.often.map(result=>(
        <>
        <input className="radio-buttons" type="radio" value={result} 
        onChange={null}/>
        <label className="radio-options">{result}</label>
        </>
        ))}
        </div>
        
        <div><label>{shave.questions[1]}</label></div>
        <div>
        {shave.razor.map(result=>(
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

export default Shave
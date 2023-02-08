

const Shave = ({shave, updateRadio, updateCheckbox, userScores, updateUserScores}) =>{

    
    return(<div> 
       
        <h2 className="subtitle">You mentioned you shave, let’s learn more</h2>

        <form className="form" style={{marginTop:50}}>
        <div className="B2-grid-container">    
        <div><label>{shave.questions[0]}</label></div>
        <div>
        {shave.often.map(result=>(
        <>
        <input className="radio-buttons" type="radio" name="often" value={result} 
        onChange={e=>updateRadio(e)}/>
        <label className="radio-options">{result}</label>
        </>
        ))}
        </div>
        
        <div><label>{shave.questions[1]}</label></div>
        <div>
        {shave.razor.map(result=>(
        <>
        <input className="radio-buttons" type="radio" name="razor" value={result} 
        onChange={e=>updateRadio(e)}/>
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
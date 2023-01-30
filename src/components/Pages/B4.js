//raz

const B4 = ({updateCheckbox,nextStep,skipStep,responses,questions,options}) => {

    
    return (
        <div className="B4-container">
        <h1 className="title">Perfect! I'm already getting skincare ideas for you, {responses.name}!</h1> 
        <h2 className="subtitle" style={{width: 616, height: 62, left:120,top: 168,marginTop:80}}>What are the signs you have or sometimes notice?<br/> 
        Select all the examples that fit</h2>  
        
        <form className="form">
        <div className="B2-grid-container">
       
        <div><label className="question">{questions[0]}</label></div>  
        <div>
        {options.ageRrelated.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" name="ageRelated" value={result} 
         onChange={e=>updateCheckbox(e)}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
         
        <div><label className="question">{questions[1]}</label></div>
        <div>
        {options.acneRelated.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
        
        <div><label className="question">{questions[2]}</label> </div>
        <div>
        {options.redness.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>

        <div><label className="question">{questions[3]}</label> </div>
        <div>
        {options.flakes.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
        
        <div><label className="question">{questions[4]}</label></div>
        <div>
        {options.faicalHair.map(result=>(
        <>
        <input className="radio-buttons" type="radio" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </div>
        </div>
        </form>

        <button className="btn" style={ {marginLeft: 500}} onClick={responses.name ? nextStep : skipStep}>Next</button> 
        </div> 
    );
}


export default B4
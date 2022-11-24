//raz

const B4 = ({nextStep,questions,options}) => {

    
    return (
        <div className="B4-container">
        <headr> 
        <h3>Perfect! I'm already getting skincare ideas for you, [Name]!</h3> 
        <h2 style={{width: 616, height: 62, left:120,top: 168,marginTop:80}}>What are the signs you have or sometimes notice?<br/> 
        Select all the examples that fit</h2>  
        </headr>  
     
        <form className="form">
        <label>{questions[0]}</label>
        {options.ageRrelated.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}

        <br/>
        <label>{questions[1]}</label>
        {options.acneRelated.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        
        <br/>
        <label>{questions[2]}</label>
        {options.redness.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}

        <br/>
        <label>{questions[3]}</label>
        {options.flakes.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}

        <br/>
        <label>{questions[4]}</label>
        {options.faicalHair.map(result=>(
        <>
        <input className="radio-buttons" type="radio" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        </form>

        <button onClick={nextStep}>Next</button>
        </div>
    );
}


export default B4
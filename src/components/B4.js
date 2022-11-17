//raz

const B4 = ({nextStep}) => {

    let ageRrelatedOptions=["Sagging skin","Fine lines","Wrinkles","Pigmentation"]
    let acneRelatedOptions=["blackheads","pimples","severe acne"] 
    let rednessOptions=["From time to time my skin is a little red"
    ,"Looks like I have sunburn without going to the sun"
    ,"I have apparent blood vessels","I was diagnosed with Rosacea "]
    let flakesOptions=["dundruff in the hair or beard","flakes on the skin","seborrhea"]
    let faicalHairOptions=["I shave sometimes or as part of daily skin care routine","I have a beard and don’t shave"]

    return (
        <div className="B4-container">
        <headr> 
        <h3>Perfect! I'm already getting skincare ideas for you, [Name]!</h3> 
        <h2 style={{width: 616, height: 62, left:120,top: 168,marginTop:80}}>What are the signs you have or sometimes notice?<br/> 
        Select all the examples that fit</h2>  
        </headr>  
     
        <form className="form">
        <label>age-related</label>
        {ageRrelatedOptions.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}

        <br/>
        <label>acne-related </label>
        {acneRelatedOptions.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}
        
        <br/>
        <label>redness</label>
        {rednessOptions.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}

        <br/>
        <label>flakes</label>
        {flakesOptions.map(result=>(
        <>
        <input className="radio-buttons" type="checkbox" value={result} 
        onChange={null}/>
         <label className="radio-options">{result}</label>
         </>
        ))}

        <br/>
        <label>facial hair</label>
        {faicalHairOptions.map(result=>(
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
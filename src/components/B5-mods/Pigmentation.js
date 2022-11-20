
const Pigmentation = () =>{
    
    let problemOptions=["discoloration","Dark spots"]
    let sunExposureOptions=["Yes","No","not sure"]
    let otherFactorsOptions=["Stress,fatigue","Hormonal changes","Acne scars","Medical issues","Not sure"]
    
    return(
            <div> 
            <form className="form" style={{marginTop:150}}>
            <h1>You mentioned you have acne,let's learn more</h1>    
            <label>Wich Pigmentation problem do you suffer from?</label>
            {problemOptions.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>Are the pigmentation issues related to sun exposure?</label>
            {sunExposureOptions.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>Wich other factors seem to affect the appearance of the spots?</label>
            {otherFactorsOptions.map(result=>(
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
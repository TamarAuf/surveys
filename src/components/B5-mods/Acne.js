
const Acne = () =>{
    let pimpelsOptions=["Only on occasion","Always,but intesity varies in time","Always,int rather consistent manner"]
    let changesOptions=["Hormonal changes","Lack of sleep","Wearing a mask","Alimentation","Shaving","not Sure"]
    let skinReactOptions=["it helps,and my skin fells comfotable","Usually,useless,but my skin fells fine","it works.but leaves my skin feeling dry and itchy","never tried"]
    return(
            <div> 
            <form className="form">
            <h1>You mentioned you have acne,let's learn more</h1>    
            <label>do you have pimpels all the time?</label>
            {pimpelsOptions.map(result=>(
            <>
            <input className="radio-buttons" type="radio" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>What do you fell causes these changes?</label>
            {changesOptions.map(result=>(
            <>
            <input className="radio-buttons" type="checkbox" value={result} 
            onChange={null}/>
            <label className="radio-options">{result}</label>
            </>
            ))}

            <br/>
            <label>How does your skin usually react to skin care products for acne-prone skin?</label>
            {skinReactOptions.map(result=>(
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
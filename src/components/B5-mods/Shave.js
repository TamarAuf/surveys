

const Shave = () =>{

    let oftenOptions=["Every day","Evrey couple of days","Less then once a week","Only shaving specific area such as the neck"]
    let razorOptions=["Singale or double-blade manual razor","Multi-blades manual razor","Dry electric shaver","Wet electric shaver"]
    return(<div> 
        <form className="form" style={{marginTop:300}}>
        <h1>You mentioned you shave,let’s learn more</h1>    
        <label>How often do you shave?</label>
        {oftenOptions.map(result=>(
        <>
        <input className="radio-buttons" type="radio" value={result} 
        onChange={null}/>
        <label className="radio-options">{result}</label>
        </>
        ))}

        <br/>
        <label>Wich type of razor do you use?</label>
        {razorOptions.map(result=>(
        <>
        <input className="radio-buttons" type="radio" value={result} 
        onChange={null}/>
        <label className="radio-options">{result}</label>
        </>
        ))}
        </form>
        </div>
        );
}

export default Shave
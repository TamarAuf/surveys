import { useState } from "react"

const B2 = ({nextStep}) =>{
    let cleanOptions=["Tight and dry", "Smooth and Comfortable", "Still greasy and shiny"];
    const [clean, setClean] = useState();

    let winterOptions=["Yes", "No", "Not Sure"];
    const [winter, setWinter] = useState();

    let sunOptions=["I have fair skin that burns easily and hardly tan", 
    "My skin tans easily and rarely burns", 
    "I have dark skin that hardly get sunburned"];
    const [sun, setSun] = useState();

    let sensitiveOptions=["I have irritated skin",
    "I’m prone to allergic reaction on my skin", 
    "I have psoriasis",
    "I have atopic dermatitis"];
    const [sensitive, setSensitive] = useState();

    return (
        <div className="B2-container">
         <h1>Nice to meet you, Name!</h1>
         <p>I want to help you to choose the most matching skin care</p>
         <p>regimen for you. Please tell me a little about your skin.</p>
         <p>How does your skin feel after cleaning and before putting moisturizer?</p>
         {cleanOptions.map(result=>(
          <>
          <input type="radio" value={result} name="radioValues1"
          onChange={(e)=>setClean(e.target.value)}/>
          <label>{result}</label>
          </>
          ))}

          <p>Does your skin usually feel drier in the winter?</p>
          {winterOptions.map(result=>(
          <>
          <input type="radio" value={result} name="radioValues2"
          onChange={(e)=>setWinter(e.target.value)}/>
          <label>{result}</label>
          </>
          ))}

          <p>How does your skin react to sun?</p>
          {sunOptions.map(result=>(
          <>
          <input type="radio" value={result} name="radioValues3"
          onChange={(e)=>setSun(e.target.value)}/>
          <label>{result}</label>
          </>
          ))}

          <p>Is your skin sensitive?</p>
          {sensitiveOptions.map(result=>(
          <>
          <input type="radio" value={result} name="radioValues4"
          onChange={(e)=>setSensitive(e.target.value)}/>
          <label>{result}</label>
          </>
          ))}
          <button onClick={nextStep}>Next</button>
        </div>
      );
}

export default B2
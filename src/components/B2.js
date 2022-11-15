import { useState } from "react"

const B2 = ({nextStep}) =>{
    let cleanOptions=["Tight and dry", "Smooth and Comfortable", "Still greasy and shiny"];
    const [clean, setClean] = useState();

    let winterOptions=["Yes", "No", "Not Sure"];
    const [winter, setWinter] = useState();

    let sunOptions=["I have fair skin that burns easily and hardly tan", 
    "My skin tans easily and rarely burns", 
    "I have dark skin that hardly gets sunburned"];
    const [sun, setSun] = useState();

    let sensitiveOptions=["I have irritated skin",
    "I’m prone to allergic reaction on my skin", 
    "I have psoriasis",
    "I have atopic dermatitis"];
    const [sensitive, setSensitive] = useState();

    return (
        <div className="B2-container">
          <header>
            <h1 className="title">Nice to meet you, Name!</h1>
            <p className="subtitle">I want to help you to choose the most matching skin care <br />
            regimen for you. Please tell me a little about your skin.</p>
          </header>
         <div className="B2-grid-container">
         <div>
         <p className="question">How does your skin feel after <br />
         cleaning and before putting <br />
         moisturizer?</p>
         </div>
         <div>
         {cleanOptions.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues1"
          onChange={(e)=>setClean(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <p className="question">Does your skin usually feel <br />
          drier in the winter?</p>
          </div>
          <div>
          {winterOptions.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues2"
          onChange={(e)=>setWinter(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <p className="question">How does your skin react to <br />
          the sun?</p>
          </div>
          <div>
          {sunOptions.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues3"
          onChange={(e)=>setSun(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <p className="question">Is your skin sensitive?</p>
          </div>
          <div>
          {sensitiveOptions.map(result=>(
          <>
          <input className="radio-buttons" type="checkbox" value={result} 
          onChange={(e)=>setSensitive(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          </div>
          <button className="btn" onClick={nextStep}>Next</button>
        </div>
      );
}

export default B2
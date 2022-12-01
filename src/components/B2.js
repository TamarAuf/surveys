import { useState } from "react"

const B2 = ({nextStep, setResponses, responses, questions, options}) => {

  const handleChange = e => {
     const newResponses = {...responses}
      const newB2 = {...newResponses.B2Responses}
      newB2.clean = e.target.value
      setResponses(newResponses)
     }

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
            <h2 className="subtitle">I want to help you to choose the most matching skin care <br />
            regimen for you. Please tell me a little about your skin.</h2>
          </header>

         <form className="form">  
         <div className="B2-grid-container">
         <div>
         <label className="question">{questions[0]}</label>
         </div>
         <div>
         {options.clean.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues1"
          onChange={(e)=>setResponses({...responses,name: e.target.value})}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[1]}</label>
          </div>
          <div>
          {options.winter.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues2"
          onChange={(e)=>setWinter(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[2]}</label>
          </div>
          <div>
          {options.sun.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} name="radioValues3"
          onChange={(e)=>setSun(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          <div>
          <label className="question">{questions[3]}</label>
          </div>
          <div>
          {options.sensitive.map(result=>(
          <>
          <input className="radio-buttons" type="checkbox" value={result} 
          onChange={(e)=>setSensitive(e.target.value)}/>
          <label className="radio-options">{result}</label>
          </>
          ))}
          </div>
          </div>
          </form>
          <button className="btn" onClick={nextStep} style={{ left: 427, bottom: 120}}>Next</button>
        </div>
      
      );
}

export default B2
//raz
const B1 = ({nextStep},values) =>{
    
  let age=["up to 20","21-35","36-60","60 and up","prefer not to say"]
  let gender=["Female","Male","Transwomen","Transman","Non-binary","Prefer not to say"]

    return (
        <div className= "B1-container">
          <hedar>
          <h3>Hi, I’m MeNow! AI-consultant</h3>
          <h2>Let’s start with getting to know you.</h2>
          </hedar>
          <form className="form">
            
          <label>What should we call you?</label>
          <input type="text" placeholder="Name or nickname"></input>

          <div className="display-linebreak"></div>

          <label>How old are you?</label>
          {age.map(result=>(
          <>
          <input type="radio" value={result} onChange={(e)=>values.age=e.target.value} name="radioValues1"/>
          <label>{result}</label> 
          </>
          ))}

         <div className="display-linebreak"></div>
        
         <label>Which gender do you identify with?</label>
          {gender.map(result=>(
          <>
          <input type="radio" value={result} onChange={console.log(values.age)} name="radioValues2"/>
          <label>{result}</label> 
          </>  
          ))}
          </form>
         
         <button onClick={nextStep}>Next</button>
        </div>
      );
}

export default B1
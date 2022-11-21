//raz
const B1 = ({nextStep},questions,options) =>{
    
  //let age=["up to 20","21-35","36-60","60 and up","prefer not to say"]
  let gender=["Female","Male","Transwomen","Transman","Non-binary","Prefer not to say"]

    return (
        <div className= "B1-container">
          <hedar>
          <h3>Hi, I’m MeNow! AI-consultant</h3>
          <h2>Let’s start with getting to know you.</h2>
          </hedar>
          <form className="form">
            
          <label>{questions[0]}</label>
          <input type="text" placeholder="Name or nickname"></input><br/>

          

          <label>questions[1]</label>
          {options.age.map(result=>(
          <>
          <input type="radio" value={result} onChange={null} name="radioValues1"/><br/>
          <label>{result}</label> 
          </>
          ))}

         
        
         <label>Which gender do you identify with?</label>
          {gender.map(result=>(
          <>
          <input type="radio" value={result} onChange={null} name="radioValues2"/>
          <label>{result}</label> 
          </>  
          ))}
          </form>
         
         <button onClick={nextStep}>Next</button>
        </div>
      );
}

export default B1
//raz
const B1 = ({nextStep,setResponses,responses,questions,options}) =>{
     
     //const handleChange = e => {
     // const newResponses = {...responses}
      //const newB1 = {...newResponses.B1Responses}
      //newB1.name = e.target.value
      //setResponses(newResponses)
     //}
    return (
        <div className= "B1-container">
          <hedar>
          <h3>Hi, I’m MeNow! AI-consultant</h3>
          <h2>Let’s start with getting to know you.</h2>
          </hedar>
          <form className="form">

         
        
          <label>{questions[0]}</label>
          <input type="text" placeholder="Name or nickname" onChange={(e)=>setResponses({...responses,name: e.target.value})}></input><br/>

          
          <label>{questions[1]}</label><br/>
          {options.age.map(result=>(
          <>
          <input type="radio" value={result} onChange={(e)=>setResponses({...responses,age: e.target.value})} name="radioValues1"/>
          <label>{result}</label> 
          </>
          ))}
          

          <br/>
         <label>{questions[2]}</label><br/>
          {options.gender.map(result=>(
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
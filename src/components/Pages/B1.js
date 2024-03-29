//raz
const B1 = ({updateRadio,nextStep,questions,options}) =>{
     
     
    return (
          <div className= "B1-container">
          <div className="hader">
          <h1 className="title">Hi, I’m MeNow! AI-consultant</h1>
          <h2 className="subtitle">Let’s start with getting to know you.</h2>
          </div>
          
          <form className="form">
          <div className="B2-grid-container"> 
          <div><label className="question">{questions[0]}</label></div>
         <div><input name="name" type="text" placeholder="Name or nickname" onChange={e=>updateRadio(e)}></input></div>
         
         <div><label className="question">{questions[1]}</label></div>
          <div>
          {options.age.map(result=>(
          <>
          <input className="radio-buttons" type="radio"  value={result} onChange={(e)=>updateRadio(e)} name="age"/>
          <label className="radio-options">{result}</label> 
          </>
          ))}
          </div>
       
         <div><label className="question">{questions[2]}</label></div>
         <div>
          {options.gender.map(result=>(
          <>
          <input className="radio-buttons" type="radio" value={result} onChange={(e)=>updateRadio(e)} name="gender"/>
          <label className="radio-options">{result}</label> 
          </>  
          ))}
          </div>
          </div> 
          </form>
         
         <button className="btn" onClick={nextStep}>Next</button>
        </div>
      );
}

export default B1
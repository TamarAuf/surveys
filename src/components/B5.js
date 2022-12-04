//raz

import Acne from "./B5-mods/Acne" 
import Pigmentation from "./B5-mods/Pigmentation" 
import Shave from "./B5-mods/Shave"  

const B5 = ({nextStep,setResponses,responses,acne,pigmentation,shave}) =>{


    return(
        
        <div className="B5-container">
         <div className="hader">
          <h1 className="title">Okay, please share the details</h1>
          <h2 className="subtitle">What are the signs you have or sometimes notice? <br/> 
          Select all the examples that fit</h2>
         </div>
          <div>
            <Acne acne={acne} responses={responses} setResponses={setResponses}/>
            <Pigmentation pigmentation={pigmentation} responses={responses} setResponses={setResponses}/>
            <Shave shave={shave} responses={responses} setResponses={setResponses}/>
            </div>
        <button className="btn-corner" style={ {marginLeft: 1000}} onClick={nextStep}>Next</button>
        </div>
    );
}

export default B5
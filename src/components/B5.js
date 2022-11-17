//raz

import Acne from "./B5-mods/Acne" 
import Pigmentation from "./B5-mods/Pigmentation" 
import Shave from "./B5-mods/Shave"  

const B5 = ({nextStep}) =>{


    return(
        
        <div className="B4-container">
         <header>
          <h3>Okay, please share the details</h3>
          <h2>What are the signs you have or sometimes notice? <br/> 
          Select all the examples that fit</h2>
         </header>
         <Acne/> 
         <Pigmentation/>
         <Shave/>
        <button onClick={nextStep}>Next</button>
        </div>
    );
}

export default B5
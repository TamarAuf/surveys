//raz

import Acne from "./B5-mods/Acne" 
import Pigmentation from "./B5-mods/Pigmentation" 
import Shave from "./B5-mods/Shave"  

const B5 = ({nextStep,acne,pigmentation,shave,updateRadio,updateCheckbox,userScores,updateUserScores}) =>{


    return(
        
        <div className="B5-container">
         <div className="hader">
          <h1 className="title">Okay, please share the details</h1>
          <h2 className="subtitle">What are the signs you have or sometimes notice? <br/> 
          Select all the examples that fit</h2>
         </div>
          <div>
            <Acne acne={acne} updateRadio={updateRadio} updateCheckbox={updateCheckbox}
            userScores={userScores} updateUserScores={updateUserScores}/>
            <Pigmentation pigmentation={pigmentation} updateRadio={updateRadio} updateCheckbox={updateCheckbox}
            userScores={userScores} updateUserScores={updateUserScores}/>
            <Shave shave={shave} updateRadio={updateRadio} updateCheckbox={updateCheckbox}
            userScores={userScores} updateUserScores={updateUserScores}/>
            </div>
        <button className="btn-corner" style={ {marginLeft: 1000}} onClick={nextStep}>Next</button>
        </div>
    );
}

export default B5
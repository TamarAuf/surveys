import { useState } from "react" 
import Questions from '../data/Questions.json'
import responses from '../data/Responses.json'
import userScores from '../data/UserScores.json'
import Intro from "./Pages/Intro"
import B1 from "./Pages/B1.js"
import B2 from "./Pages/B2"
import B3 from "./Pages/B3"
import B4 from "./Pages/B4"
import B5 from "./Pages/B5"
import B6 from "./Pages/B6"
import Result from "./Pages/Result"




const Main = () => {
  const [page, setPage] = useState(0);

  let [Responses,setResponses]  = useState(responses)
  let [UserScores,setUserScores]  = useState(userScores)
  



// functions to move between pages 
  const nextStep = () => {
    setPage((currPage) => 
    currPage + 1)
  }

  const skipStep = () => {
    setPage((currPage) => 
    currPage + 2)
  }
 
  // functions to update the responses and scores
 function updateRadio (e){
   setResponses({...Responses,[e.target.name]:e.target.value});
 }

 function updateCheckbox (e,array){ 
    let newArray = []
    // if array exists make a copy of it 
    if(Array.isArray(array))
    {
       newArray = [...array]
    }
    
    // add to array if item is checked
    if(e.target.checked)
    {
      newArray.push(e.target.value)
      
      
    }
    // remove from array if item is unchecked
    else
    {
      const index = newArray.indexOf(e.target.value)
      newArray.splice(index,1)
      
    }
    
    setResponses({...Responses,[e.target.name]:newArray})
 }

 function updateSkinType (skinType, isSensitive){
  setResponses({...Responses, skinType: skinType, isSensitive: isSensitive});
 }

 function updateUserScores (category, score){
 setUserScores({...UserScores, [category]: score});
 }

  const PageDisplay = () => {
    switch (page){
        case 0:
            return(<Intro
              nextStep={nextStep}/>);
        case 1:
            return(<B1 updateRadio={updateRadio} responses={Responses} questions={Questions.B1Questions.questions} options={Questions.B1Questions}
              userScores={UserScores} updateUserScores={updateUserScores} nextStep={nextStep}/> );   
        case 2:
            return(<B2 updateRadio={updateRadio} updateCheckbox={updateCheckbox} updateSkinType={updateSkinType} 
              questions={Questions.B2Questions.questions} options={Questions.B2Questions} 
              responses={Responses} nextStep={nextStep}/>);
        case 3:
            return(<B3 updateRadio={updateRadio} updateSkinType={updateSkinType} questions={Questions.B3Questions.questions} options={Questions.B3Questions}
              responses={Responses} userScores={UserScores} updateUserScores={updateUserScores} nextStep={nextStep}/>);
        case 4:
            return(<B4 updateRadio={updateRadio} updateCheckbox={updateCheckbox} responses={Responses} questions={Questions.B4Questions.questions} options={Questions.B4Questions}
              userScores={UserScores} updateUserScores={updateUserScores} nextStep={nextStep} skipStep={skipStep}/>);    
        case 5:
            return(<B5 updateRadio={updateRadio} updateCheckbox={updateCheckbox} responses={Responses} acne={Questions.B5Questions.Acne} pigmentation={Questions.B5Questions.Pigmentation} shave={Questions.B5Questions.Shave}
              userScores={UserScores} updateUserScores={updateUserScores} nextStep={nextStep}/>);
        case 6:
            return(<B6 updateRadio={updateRadio} updateCheckbox={updateCheckbox} questions={Questions.B6Questions.questions} options={Questions.B6Questions}
              responses={Responses} nextStep={nextStep}/>);
        case 7:
            return(<Result responses={Responses} updateRadio={updateRadio}/>);
        default:
          return(<Intro/>);
    }
  }




  return (
      <div className="page">
      {PageDisplay()}</div>
  )
}

export default Main 

import { useState } from "react" 
import Questions from '../../data/Questions.json'
import responses from '../../data/Responses.json'
import Intro from "./Intro"
import B1 from "./B1.js"
import B2 from "./B2"
import B3 from "./B3"
import B4 from "./B4"
import B5 from "./B5"
import B6 from "./B6"
import Result from "./Result"



const Main = () => {
  const [page, setPage] = useState(0);

  let [Responses,setResponses]  = useState(responses)
     
  

// functions to move between pages 
  const nextStep = () => {
    setPage((currPage) => 
    currPage + 1)
  }

  const skipStep = () => {
    setPage((currPage) => 
    currPage + 2)
  }
 
  // functions to update the responses
 function updateRadio (e){
   setResponses({...Responses,[e.target.name]:e.target.value}) 
 }

 function updateCheckbox (e){  
    var newArray = {...[e.target.name]}
    newArray.push(e.target.value)
    const newObj = {...Responses,[e.target.name]:newArray}
    setResponses({newObj})

 }
   
  
        

  const PageDisplay = () => {
    switch (page){
        case 0:
            return(<Intro
              nextStep={nextStep}/>);
        case 1:
            return(<B1 updateRadio={updateRadio} responses={Responses} setResponses={setResponses} questions={Questions.B1Questions.questions} options={Questions.B1Questions}
              nextStep={nextStep}/> );   
        case 2:
            return(<B2 updateRadio={updateRadio} responses={Responses} setResponses={setResponses} questions={Questions.B2Questions.questions} options={Questions.B2Questions}
              nextStep={nextStep}/>);
        case 3:
            return(<B3 updateRadio={updateRadio} responses={Responses} setResponses={setResponses} questions={Questions.B3Questions.questions} options={Questions.B3Questions}
              nextStep={nextStep}/>);
        case 4:
            return(<B4 updateCheckbox={updateCheckbox} responses={Responses} setResponses={setResponses} questions={Questions.B4Questions.questions} options={Questions.B4Questions}
              nextStep={nextStep} skipStep={skipStep}/>);    
        case 5:
            return(<B5 updateRadio={updateRadio} responses={Responses} setResponses={setResponses}  acne={Questions.B5Questions.Acne} pigmentation={Questions.B5Questions.Pigmentation} shave={Questions.B5Questions.Shave}
              nextStep={nextStep}/>);
        case 6:
            return(<B6 updateRadio={updateRadio} responses={Responses} setResponses={setResponses} questions={Questions.B6Questions.questions} options={Questions.B6Questions}
              nextStep={nextStep}/>);
        case 7:
            return(<Result responses={Responses}/>);
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

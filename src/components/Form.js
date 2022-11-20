import { useState } from "react"
import Intro from "./Intro"
import B1 from "./B1"
import B2 from "./B2"
import B3 from "./B3"
import B4 from "./B4"
import B5 from "./B5"
import B6 from "./B6"
import Result from "./Result"

const Form = () => {
  const [page, setPage] = useState(0);


  const nextStep = () => {
    setPage((currPage) => 
    currPage + 1)
  }

  const PageDisplay = () => {
    switch (page){
        case 0:
            return(<Intro
              nextStep={nextStep}/>);
        case 1:
            return(<B1
              nextStep={nextStep}/>);   
        case 2:
            return(<B2
              nextStep={nextStep}/>);
        case 3:
            return(<B3
              nextStep={nextStep}/>);
        case 4:
            return(<B4
              nextStep={nextStep}/>);    
        case 5:
            return(<B5
              nextStep={nextStep}/>);
        case 6:
            return(<B6
              nextStep={nextStep}/>);
        case 7:
            return(<Result/>);
        default:
          return(<Intro/>)
    }
  }

  let responses = {
    B1Responses : {

    },
    B2Responses : {
      clean: "",
      winter: "",
      sun: "",
      sensitive: []
    },
    B3Responses : {
      agree: "",
      skinType: "",
    },
    B4Responses : {

    },
    B5Responses : {

    },
    B6Responses : {
      smoke: "",
      allergy: "",
      circumstance: "",
      hormonal: "",
      impact: ""
    }
  };

  let questions = {
    B1Questions : {
      questions : []
    },
    B2Questions : {
      questions: ["How does your skin feel after cleaning and before putting moisturizer?",
                  "Does your skin usually feel drier in the winter?",
                  "How does your skin react to the sun?",
                  "Is your skin sensitive?"],
      clean: ["Tight and dry", "Smooth and Comfortable", "Still greasy and shiny"],
      winter: ["Yes", "No", "Not Sure"],
      sun: ["I have fair skin that burns easily and hardly tan", 
            "My skin tans easily and rarely burns", 
            "I have dark skin that hardly gets sunburned"],
      sensitive: ["I have irritated skin",
                  "I’m prone to allergic reaction on my skin", 
                  "I have psoriasis",
                  "I have atopic dermatitis"]
    }, 
    B3Questions : {
      questions: ["Do you agree?", "Then what kind of skin do you think you have?"],
      agree: ["Yes", "No", "Not Sure"],
      skinType: ["Dry", "Oily", "Combination", "Sensitive", "Normal"]
    },
    B4Questions : {
      questions : []
    },
    B5Questions : {
      questions : []
    },
    B6Questions : {
      questions: ["Are you smoking?", 
                  "Are you allergic to one of these items?", 
                  "Are you currently in one of these circumstances?",
                  "Are you taking a hormonal contraceptive?",
                  "What impact does it have on your skin?"],
      smoke: ["Yes", "No", "Only on rare occasions"],
      allergy: ["Item1", "Item2", "Item3"],
      circumstance: ["Pregnant", "Breastfeeding", "Menopause", "None of that", "Prefer not to say"],
      hormonal: ["Yes", "No", "Prefer not to answer"],
      impact: ["Better", "Worse"]
    }
  };

  return (
      <div className="page">
      {PageDisplay()}</div>
  )
}

export default Form

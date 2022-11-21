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

// function to skip pages 
  const nextStep = () => {
    setPage((currPage) => 
    currPage + 1)
  }

  //functions to update the responses
 const handleChange = (response,value) => {
        response = value;
 }
   
  
        

  const PageDisplay = () => {
    switch (page){
        case 0:
            return(<Intro
              nextStep={nextStep}/>);
        case 1:
            return(<B1  questions={Questions.B1Questions.questions} options={Questions.B1Questions}
              nextStep={nextStep}/> );   
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

  let Responses = {
    B1Responses : {
       name: "",
       age: "",
      gender: ""
    },
    B2Responses : {
      clean: "",
      winter: "",
      sun: "",
      sensitive: []
    },
    B3Responses : {
      agree: "",
      skinType: ""
    },
    B4Responses : {
    ageRelated:[],
    acneRelated:[],
    redness:[],
    flakes:[],
    facialHair:""

    },
    B5Responses : {
      Acne: {
        pimpels: "",
        changes: [],
        skinReact: ""
      },

      Pigmentation : {
        problem: [],
        sunExposure: "",
        otherFactor: [],
      },

      Shave : {
        often: "",
        razor: "" 
      }

    },
    B6Responses : {
      smoke: "",
      allergy: "",
      circumstance: "",
      hormonal: "",
      impact: ""
    }
  };


  let Questions = {
    B1Questions : {
      questions : ["What should we call you?","How old are you?","Which gender do you identify with?"],
      age: ["up to 20","21-35","36-60","60 and up","prefer not to say"],
      gender: ["Female","Male","Transwomen","Transman","Non-binary","Prefer not to say"]
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
      questions : ["age-related","acne-related","redness","flakes","facial hair"],
      ageRrelatedOptions: ["Sagging skin","Fine lines","Wrinkles","Pigmentation"],
      acneRelatedOptions:["blackheads","pimples","severe acne"], 
      rednessOptions: ["From time to time my skin is a little red"
    ,"Looks like I have sunburn without going to the sun"
    ,"I have apparent blood vessels","I was diagnosed with Rosacea "],
     flakesOptions:["dundruff in the hair or beard","flakes on the skin","seborrhea"],
     faicalHairOptions:["I shave sometimes or as part of daily skin care routine","I have a beard and don’t shave"]
    },
    B5Questions: {
      Acne: {
        questions: ["do you have pimpels all the time?","What do you fell causes these changes?","How does your skin usually react to skin care products for acne-prone skin?"],
        pimpelsOptions: ["Only on occasion","Always,but intesity varies in time","Always,int rather consistent manner"],
        changesOptions: ["Hormonal changes","Lack of sleep","Wearing a mask","Alimentation","Shaving","not Sure"],
        skinReactOptions:["it helps,and my skin fells comfotable","Usually,useless,but my skin fells fine","it works.but leaves my skin feeling dry and itchy","never tried"]
      },

      Pigmentation : {
        questions : ["Wich Pigmentation problem do you suffer from?","Are the pigmentation issues related to sun exposure?","Wich other factors seem to affect the appearance of the spots?"],
        problemOptions: ["discoloration","Dark spots"],
        sunExposureOptions: ["Yes","No","not sure"],
        skinReactOption: ["Stress,fatigue","Hormonal changes","Acne scars","Medical issues","Not sure"]
      },

      Shave : {
        questions : ["How often do you shave?","Wich type of razor do you use?"],
        oftenOptions: ["Every day","Evrey couple of days","Less then once a week","Only shaving specific area such as the neck"],
        razorOptions: ["Singale or double-blade manual razor","Multi-blades manual razor","Dry electric shaver","Wet electric shaver"]
      }

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

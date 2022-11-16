
//raz 


const Intro = ({nextStep}) => {



  return (
    
    <div className="Intro-container">
     <h3>  Welcome to MeNow! - </h3>
     <h2>an AI-powered platform predicting <div className="display-linebreak"></div>
      highly individual skincare recommendations. </h2>
      <p >Choose your way to get the list <div className="display-linebreak"></div>
      of your own personalized skincare set.</p>
      <p>Just a couple of questions and a <div className="display-linebreak"></div>
      picture for the automatic image <div className="display-linebreak"></div>
      analysis system</p>
      <p>Take a five-minute <div className="display-linebreak"></div>
      questionnaire about your skin</p>
     <button onClick={null}>Use image analysis</button>
     <button onClick={nextStep}>take the survey</button>
    </div>
  );
}

export default Intro
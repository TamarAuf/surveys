
//raz 


const Intro = ({nextStep}) => {



  return (
    
    <div className="Intro-container">
      <header>
     <h3>  Welcome to MeNow! - </h3>
     <h2>an AI-powered platform predicting <div className="display-linebreak"></div>
      highly individual skincare recommendations. </h2>
      </header>

      <p style={{width: 308, height: 69, left: 427,top: 308}}>Choose your way to get the list <div className="display-linebreak"></div>
      of your own personalized skincare set.</p>
      <p style={{  width: 420, height: 46, left: 427,top: 452}}>Just a couple of questions and a <div className="display-linebreak"></div>
      picture for the automatic image <div className="display-linebreak"></div>
      analysis system</p>
      <p style={{ width: 283, height: 46, left: 838,top: 558}}>Take a five-minute <div className="display-linebreak"></div>
      questionnaire about your skin</p>
      
     <button onClick={null} style={{ width: 279, height: 64, left: 427,top: 657}}>Use image analysis</button>
     <button onClick={nextStep} style={{ width: 241, height: 64, left: 842,top: 657}}>take the survey</button>


    </div>
  );
}

export default Intro




//raz 


const Intro = ({nextStep}) => {



  return (
    
    <div className="Intro-container">
      <header>
     <h1 className="title">  Welcome to MeNow! - </h1>
     <h2 className="subtitle">an AI-powered platform predicting <br/>
      highly individual skincare recommendations. </h2>
      </header>

      <p style={{width: 420, height: 46, left: 427,top: 452}}>Choose a way to get a list <br/>
      of your own personalized skincare set.</p>
      <p style={{  width: 308, height: 69, left: 427,top: 558}}>Just a couple of questions and a <br/>
      picture for the automatic image <br/>
      analysis system</p>
      <p style={{ width: 283, height: 46, left: 838,top: 558}}>Take a five minute <br/>
      questionnaire about your skin</p>
      
     <button className="btn" onClick={null} style={{ width: 279, height: 64, left: 427,top: 657}}>Use image analysis</button>
     <button  className="btn"onClick={nextStep} style={{ width: 241, height: 64, left: 842,top: 657}}>Take the survey</button>


    </div>
  );
}

export default Intro



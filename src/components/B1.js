//raz
const B1 = ({nextStep}) =>{
    return (
        <div claaName= "B1-container">
          <hedar>
          <h3>Hi, I’m MeNow! AI-consultant</h3>
          <h2>Let’s start with getting to know you.</h2>
          </hedar>
          <label>What should we call you?</label>
          <input type="text"></input>
         <button onClick={nextStep}>Next</button>
        </div>
      );
}

export default B1
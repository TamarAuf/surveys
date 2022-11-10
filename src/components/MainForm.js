import Intro from"./Intro.js" 
import B1 from "B1.js"

const MainForm = () => {
    state = {
        step: 1,
        Name: '',
        Age: '',
        Gender: ''
      };

      // Proceed to next step
    nextStep = () => {
    const { step } = state;
    setState({
       step: step + 1
    });
  };

  // Handle fields change
    handleChange = input => e => {
    setState({ [input]: e.target.value });
  };

    const { step } = this.state;
    const { Name,Age,Gender } = this.state;
    const values = { Name,Age,Gender };
    
    switch (step){
        case 1:
            return(
                <Intro next={nextStep}/>
            );
       case 2:
            return(
                <B1/>
            );     
    }
        
       
 
}

export default MainForm
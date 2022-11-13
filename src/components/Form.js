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

  const numberPages = 8;

  const PageDisplay = () => {
    switch (page){
        case 0:
            return(<Intro/>);
        case 1:
            return(<B1/>);   
        case 2:
            return(<B2/>);
        case 3:
            return(<B3/>);
        case 4:
            return(<B4/>);    
        case 5:
            return(<B5/>);
        case 6:
            return(<B6/>);
        case 7:
            return(<Result/>);
        default:
          return(<Intro/>)
    }
  }

  return (
    <div className="form">
      <div className="form-container">
          <div className="header">
              <div className="body">{PageDisplay()}</div>
                <div className="footer">
                  <button 
                    disabled={page === numberPages-1}
                    onClick={() => {setPage((currPage) => 
                    currPage + 1)}}>Next</button>
                </div>   
          </div>
        </div>  
    </div>
        
    
  )
}

export default Form

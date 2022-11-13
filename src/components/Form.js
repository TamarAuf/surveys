import { useState } from "react"
import Intro from "./Intro"
import B1 from "./B1"
import B3 from "./B3"

const Form = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ["Intro", "B1", "B3"];

  const PageDisplay = () => {
    switch (page){
        case 0:
            return(<Intro/>);
        case 1:
            return(<B1/>);   
        case 2:
            return(<B3/>);
    }
  }

  return (
    <div className="form">
      <div className="progressBar"></div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
              <div className="body">{PageDisplay()}</div>
                <div className="footer">
                  <button 
                    disabled={page === FormTitles.length - 1}
                    onClick={() => {setPage((currPage) => 
                    currPage + 1)}}>Next</button>
                </div>   
          </div>
        </div>  
    </div>
        
    
  )
}

export default Form

import { useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'


const Result = ({ updateRadio,responses }) => {
// get results from server side
  useEffect(()=> {
   
      axios.post('recommend-product',responses).then((response)=>{
            const results = response.data
      })
       
    
},[responses])
  

  return (
    <div className="Result-container">
        
        <header>
            <h1 className="title">{responses.name}, your personal recommendations are ready!</h1>
            <p className="subtitle">Thank you for your time and for completing the questionnaire thoughtfully. </p>

            <p className="subtitle">After analyzing your answers I found out that you have [type] skin type <br />
            and we need to focus on [abc] and [abc]. I compared the ingredient <br />
            impact with your skin parameters and selected the most suitable <br />
            individual skin regime. </p>
        </header>

        <div>
          <h1>Display Results</h1>
        </div>

        <div>
        <label>for more details enter your email:</label>
        <div><input name="email" type="text" placeholder="email" onChange={e=>updateRadio(e)}></input></div>
        </div>

    </div>
  )
}

export default Result

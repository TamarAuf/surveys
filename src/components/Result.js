export const Result = ({ responses }) => {
  return (
    <div className="Result-container">
        <header>
            <h1 className="title">{responses.name}, your personal recommendations are ready!</h1>
            <p className="subtitle">Thank you for your time and for completing the questionnaire thoughfully. </p>

            <p className="subtitle">After analyzing your answers I found out that you have [type] skin type <br />
            and we need to focus on [abc] and [abc]. I compared the ingredient <br />
            impact with your skin parameters and selected the most suitable <br />
            individual skin regime. </p>
        </header>
    </div>
  )
}

export default Result

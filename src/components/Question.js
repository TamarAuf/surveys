import React from 'react'


const Question = ({question,answers,responseName,questionType,updateType}) => {
  return (
    <div>
         <div><label className="question">{question}</label></div>
         <div>
          {answers.map(answer=>(
          <>
          <input key={answer} className={questionType} type={questionType}  value={answer} onChange={(e)=>updateType(e)} name={responseName}/>
          <label key={answer} className={questionType}>{answer}</label> 
          </>
          ))}
          </div>
    </div>
  )
}

Question.propTypes = {}

export default Question

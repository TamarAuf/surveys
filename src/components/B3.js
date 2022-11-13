const B3 = () =>{
    let options=["Yes", "No", "Not Sure"];
    return (
      <div className="B3-container">
        <header>
         <h1>Great! Let's compare assumptions</h1>
         <h2>According to your answers, I can assume that you have skin type</h2>
        </header>
        <div>
        <p>Do you agree?</p>
        {options.map(result=>(
          <>
          <input type="radio" value={result} name="radiovalues"/>
          <label>{result}</label>
          </>
          ))}
        </div> 
      </div>
      );
}

export default B3
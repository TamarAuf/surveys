import Acne from "./B5-mods/Acne"
import Pigmentation from "./B5-mods/Pigmentation"
import Shave from "./B5-mods/Shave"

const B5 = ({ nextStep, acne, pigmentation, shave, responses, updateRadio, updateCheckbox, userScores, updateUserScores }) => {
    const clickResponse = () => {
        switch (responses.pimples) {
            case "Only on occasion":
                updateUserScores("acne", userScores.acne += .1);
                break;
            case "Always, but the intensity varies over time":
                updateUserScores("acne", userScores.acne += .2);
                break;
            case "Always, in a rather consistent manner":
                updateUserScores("acne", userScores.acne += .3);
                break;
            default:
                break;
        }
        nextStep();
    }
    return (

        <div className="B5-container">
            <div className="hader">
                <h1 className="title">Okay, please share the details</h1>
                <h2 className="subtitle">What are the signs you have or sometimes notice? <br />
                    Select all the examples that fit</h2>
            </div>
            <div>
                <Acne acne={acne} updateRadio={updateRadio} updateCheckbox={updateCheckbox}/>
                <Pigmentation pigmentation={pigmentation} updateRadio={updateRadio} updateCheckbox={updateCheckbox}/>
                <Shave shave={shave} updateRadio={updateRadio} updateCheckbox={updateCheckbox}/>
            </div>
            <button className="btn-corner" style={{ marginLeft: 1000 }} onClick={clickResponse}>Next</button>
        </div>
    );
}

export default B5
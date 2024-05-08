import "./step.css";


export function Step({stepOne, stepTwo, stepThree}){
    return (
    
        <div className={`steps ${stepOne ? "steps" : stepTwo ? "stepstwo" : stepThree ? "stepsthree" : ""}`}>
            <div className={stepOne | stepTwo | stepThree ? "stepColor" : "stepGray"}>
                    <h1>1</h1>
            </div>
            <div className={stepTwo ? "actualStep": stepThree ? "stepColor" : "stepGray"}>
                    <h1>2</h1>
            </div>
            <div className={stepThree ? "actualStep" : "stepGray"}>
                    <h1>3</h1>
            </div>
        </div>
  
    )
}
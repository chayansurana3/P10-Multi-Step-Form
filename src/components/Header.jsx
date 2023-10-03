import React from "react";

function Header(props) {
    return (
        <div>
            <div className="headerWrapper">
                <div className="headerBubbles" style={{ backgroundColor: (props.step === 1 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 1 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>1</div>
                <div className="headerBubbles" style={{ backgroundColor: (props.step === 2 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 2 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>2</div>
                <div className="headerBubbles" style={{ backgroundColor: (props.step === 3 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 3 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>3</div>
                <div className="headerBubbles" style={{ backgroundColor: (props.step === 4 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 4 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>4</div>
            </div>
            <div className="headerWrapperDesktop">
                <div className="headerBubblesDesktop" style={{ backgroundColor: (props.step === 1 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 1 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>1</div>
                <div className="sideHeaderDetails">
                    <h5 className="headerStep">Step 1</h5>
                    <h5 className="headerStepInfo">YOUR INFO</h5><br></br>
                </div>
                <div className="headerBubblesDesktop" style={{ backgroundColor: (props.step === 2 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 2 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>2</div>
                <div className="sideHeaderDetails">
                    <h5 className="headerStep">Step 2</h5>
                    <h5 className="headerStepInfo">SELECT PLANS</h5><br></br>
                </div>
                <div className="headerBubblesDesktop" style={{ backgroundColor: (props.step === 3 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 3 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>3</div>
                <div className="sideHeaderDetails">
                    <h5 className="headerStep">Step 3</h5>
                    <h5 className="headerStepInfo">ADD-ONS</h5><br></br>
                </div>
                <div className="headerBubblesDesktop" style={{ backgroundColor: (props.step === 4 || props.step === 5) ? 'hsl(206, 94%, 87%)' : 'transparent', color: (props.step === 4 || props.step === 5) ? 'hsl(213, 96%, 18%)' : 'white' }}>4</div>
                <div className="sideHeaderDetails">
                    <h5 className="headerStep">Step 4</h5>
                    <h5 className="headerStepInfo">SUMMARY</h5><br></br>
                </div>
            </div>
        </div>
    )
}

export default Header;
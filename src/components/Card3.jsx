import React, {useEffect} from "react";

function Card3(props) {
    
    useEffect(() => {
        const selectedAddOns = props.selectedAddOns;
        for (const addon of selectedAddOns) {
          let id;
          if (addon === "Online service") id = "check1";
          else if (addon === "Larger storage") id = "check2";
          else if (addon === "Customizable profile") id = "check3";
          const div = document.getElementById(id);
          if (div) div.style.backgroundColor = 'rgb(173, 190, 255)';
        }
    });
      
    const handleCheckMarkClick = (event) => {
        const div = event.currentTarget; 
        const id = div.id;
        let currentBackgroundColor = div.style.backgroundColor;
        if (currentBackgroundColor === 'rgb(173, 190, 255)') div.style.backgroundColor = 'white';
        else div.style.backgroundColor = 'rgb(173, 190, 255)';
        if (id === 'check1') props.handleAddOns('Online service');
        else if (id === 'check2') props.handleAddOns('Larger storage');
        else props.handleAddOns('Customizable profile');
    }

    return props.status === 3 ? (
        <div>
            <div className="card3">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
                <button className="step3Btn" >
                    <div className="step3BtnCheck" id="check1" onClick={handleCheckMarkClick}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" /></svg></div>
                    <div className="step3BtnDetails">
                        <h2 className="step3BtnHeading">Online service</h2>
                        <h4 className="step3BtnSubHeading">Access to multiplayer games</h4>
                        <p className="step3BtnPrice">+$1/mo</p>
                    </div>
                </button>
                <button className="step3Btn" >
                    <div className="step3BtnCheck" id="check2" onClick={handleCheckMarkClick}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" /></svg></div>
                    <div className="step3BtnDetails" style={{marginLeft: '30%'}}>
                        <h2 className="step3BtnHeading">Larger storage</h2>
                        <h4 className="step3BtnSubHeading">Extra 1TB of cloud save</h4>
                        <p className="step3BtnPrice">+$2/mo</p>
                    </div>
                </button>
                <button className="step3Btn" >
                    <div className="step3BtnCheck" id="check3" onClick={handleCheckMarkClick}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" /></svg></div>
                    <div className="step3BtnDetails">
                        <h2 className="step3BtnHeading">Customizable Profile</h2>
                        <h4 className="step3BtnSubHeading">Custom theme on your profile</h4>
                        <p className="step3BtnPrice">+$2/mo</p>
                    </div>
                </button>
                <button className="goBackBtnDesktop" onClick={props.onGoBackClick}>Go Back</button>
                <button className="nextBtnDesktop" onClick={props.onNextClick}>Next Step</button>
            </div>
            
            <div className="next">
                <button className="goBackBtn" onClick={props.onGoBackClick}>Go Back</button>
                <button className="nextBtn" onClick={props.onNextClick}>Next</button>
            </div>
        </div>
    ) : null;
}

export default Card3;
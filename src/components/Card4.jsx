import React from "react";

function Card4(props) {
    let addOns = props.selectedAddOns;
    let addOnPrices = ["$1/mo", "$2/mo", "$2/mo"];
    let planValue = "";

    const extractNumberFromString = (inputString) => {
        const regex = /\d+/;
        const match = inputString.match(regex);
        if (match) return parseInt(match[0], 10);
        else return null;
    }

    const handlePlan = (plan, mode) =>{
        if (plan === 'Arcade' && mode === "Monthly") planValue = '$9/mo';
        else if (plan === 'Advanced' && mode === "Monthly") planValue = '$12/mo';
        else if (plan === 'Pro' && mode === "Monthly") planValue = '$15/mo';
        else if (plan === 'Arcade' && mode === "Yearly") planValue = '$90/yr';
        else if (plan === 'Advanced' && mode === "Yearly") planValue = '$120/yr';
        else if (plan === 'Pro' && mode === "Yearly") planValue = '$150/yr';
        return planValue;
    }

    const calculateTotal = () => {
        let total = 0, res = "";
        if (props.selectedMode === "Monthly") {
            total = extractNumberFromString(planValue);
            for (let addOn of addOns) {
                if (addOn === "Online service") total += 1;
                if (addOn === "Larger storage") total += 2;
                if (addOn === "Customizable profile") total += 2;
            }
            res = "+$" + total + "/mo";
        }
        else {
            total = extractNumberFromString(planValue);
            for (let addOn of addOns) {
                if (addOn === "Online service") total += 10;
                if (addOn === "Larger storage") total += 20;
                if (addOn === "Customizable profile") total += 20;
            }
            res = "+$" + total + "/yr";
        }
        return res;
    }

    return props.status === 4 ? (
        <div>
            <div className="card4">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="planSummaryBox">
                    <h4 className="step4PlanName">{props.selectedPlan} ({props.selectedMode})</h4>
                    <h4 id="planValue">{handlePlan(props.selectedPlan, props.selectedMode)}</h4><br></br>
                    <button id="changePlanBtn" onClick={props.handlePlanChange}>Change</button>
                    <hr />
                    {addOns.map((addOn, index) => (
                        <div key={index}>
                            <h5>{addOn}</h5>
                            <h5 className="step4AddOnValue">{addOn === "Online service" ? addOnPrices[0] : addOn === "Larger storage" ? addOnPrices[1] : addOnPrices[2]}</h5>
                        </div>
                    ))}
                </div>
                <h5 className="step4Total">Total (per {props.selectedMode === "Monthly" ? 'month' : 'year'})</h5>
                <h4 className="step4TotalValue">{calculateTotal()}</h4><br></br>
                <button className="goBackBtnDesktop" onClick={props.onGoBackClick} style={{marginTop: "5%"}}>Go Back</button>
                <button className="nextBtnDesktop" onClick={props.onNextClick} style={{marginTop: "5%"}}>Confirm</button>
            </div>

            <div className="next">
                <button className="goBackBtn" onClick={props.onGoBackClick}>Go Back</button>
                <button className="nextBtn" onClick={props.onNextClick}>Confirm</button>
            </div>
        </div>
    ) : null;
}

export default Card4;
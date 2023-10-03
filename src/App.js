import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';

function App() {

  const [display, setDisplay] = useState(1);
  const [details, setDetails] = useState({});
  const [plan, setPlan] = useState("");
  const [mode, setMode] = useState("Monthly");
  const [addOns, setAddOns] = useState([]);

  const handleUserDetails = (name, email, phone) =>{
    setDetails({name, email, phone});
  }

  const capitalizeFirstWord = (str) => !str ? str : str.charAt(0).toUpperCase() + str.slice(1);

  const handlePlanSelection = (plan) => {
    setPlan(plan);
  }

  const handleModeSelection = (slider) => {
    if (slider === 1) setMode("Monthly");
    else setMode("Yearly");
  }

  const handleAddOnSelection = (addOn) => {
    addOn = capitalizeFirstWord(addOn);
    setAddOns((prev) => {
      if (prev.includes(addOn)) return prev.filter((item) => item !== addOn);
      else return [...prev, addOn];
    });
  };
  
  const handleNextClick = () => {
    setDisplay(display + 1);
  };

  const handleGoBackClick = () => {
    setDisplay(display - 1);
  };

  const handlePlanChange = () => {
    if (window.confirm("Are you sure you want to change plan.")) setDisplay(2);
  }

  return (
    <div className="App">
      <Header step={display}/>
      <Card1 status={display} handleDetails={handleUserDetails} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick}/>
      <Card2 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} handlePlan={handlePlanSelection} handleMode={handleModeSelection}/>
      <Card3 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} handleAddOns={handleAddOnSelection} selectedAddOns={addOns}/>
      <Card4 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} selectedPlan={plan} selectedAddOns={addOns} selectedMode={mode} handlePlanChange={handlePlanChange}/>
      <Card5 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} userDetails={details}/>
    </div>
  );
}

export default App;
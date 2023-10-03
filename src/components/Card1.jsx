import React, { useState } from "react";

function Card1(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        const namePattern = /^[a-zA-Z\s]+$/;
        const isValid = namePattern.test(newName);
        setName(newName);
        setIsNameValid(isValid); 
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(newEmail);
        setEmail(newEmail);
        setIsEmailValid(isValid);
    };

    const handlePhoneChange = (event) => {
        const newPhone = event.target.value;
        const phonePattern = /^[0-9]{10}$/;
        const isValid = phonePattern.test(newPhone);
        setPhone(newPhone);
        setIsPhoneValid(isValid); 
    };

    const onNextClick = () => {
        if (isNameValid && isEmailValid && isPhoneValid && name !== "" && email !== "" && phone !== "") {
            props.handleDetails(name, email, phone);
            props.onNextClick();
        }
        else alert("Please fill in all fields correctly.");
    };

    return props.status === 1 ? (
        <div>
            <div className="card1">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <label>Name</label><br></br>
                {!isNameValid && (<p className="step1Error">Incorrect Name</p>)}
                <input id="name" type="text" placeholder="e.g. Stephen King" value={name} onChange={handleNameChange}/><br></br>
                <label>Email Address</label><br></br>
                {!isEmailValid && (<p className="step1Error">Incorrect Email Address</p>)}
                <input id="email" type="text" placeholder="e.g. stephenking@lorem.com" value={email} onChange={handleEmailChange}/><br></br>
                <label>Phone Number</label><br></br>
                {!isPhoneValid && (<p className="step1Error">Incorrect Phone Number</p>)}
                <input id="phone" type="text" placeholder="e.g. 9345678900" value={phone} onChange={handlePhoneChange}/>
                <button className="nextBtnDesktop" onClick={onNextClick}>Next Step</button>
            </div>

            <div className="next">
                <button className="nextBtn" onClick={onNextClick}>Next</button>
            </div>
        </div>
    ) : null;
}

export default Card1;
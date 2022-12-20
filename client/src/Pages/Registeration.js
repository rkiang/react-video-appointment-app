import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="username">Username </label>
                    <input className="form__input" type="text" id="username" placeholder="Username" />
                </div>
                <div className="firstname">
                    <label className="form__label" for="fName">First Name </label>
                    <input className="form__input" type="text" id="fName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lName">Last Name </label>
                    <input type="text" name="" id="lName" className="form__input" placeholder="LastName" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
            <button
                onClick={() => {
                    navigate("/")
                }}>Cancel</button>
        </div>
    )
}
export default Registration;

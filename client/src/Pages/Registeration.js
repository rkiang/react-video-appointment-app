import React, { useRef, useState, useEffect, Component } from 'react';
import { useNavigate } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UN_REGEX = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i; //email regex validation
const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8-24}$/;
function Registration() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(UN_REGEX.test(user));
    }, [user])



    const navigate = useNavigate();
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <div className="form">
                        <div className="form-body">
                            <div className="username">
                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
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
                </section>
            )}
        </>
    )
}
export default Registration;

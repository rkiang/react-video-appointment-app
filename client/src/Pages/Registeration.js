import React, { useRef, useState, useEffect, Component } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const UN_REGEX = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i; //email regex validation
// const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8-24}$/;
function Registration() {
    // const userRef = useRef();
    // const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    // const [pwd, setPwd] = useState('');
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    // const [matchPwd, setMatchPwd] = useState('');
    // const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);

    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setValidName(UN_REGEX.test(user));
    // }, [user])



    // const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: username,
            email: email,
            fName: fName,
            lName: lName,
            password: password,
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="username"
                        onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <br />
                <label>
                    Email Address:
                    <input type="text" name="email"
                        onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <br />
                <label>
                    First Name:
                    <input type="text" name="fName"
                        onChange={(e) => { setfName(e.target.value) }} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lName"
                        onChange={(e) => { setlName(e.target.value) }} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <input onClick={register} type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Registration;

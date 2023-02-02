import React, { useRef, useState, useEffect, Component } from 'react';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h3>Login</h3>
            <h5>Enter your email address and password to continue.</h5>
            <form>
                <label>
                    Email Address:
                    <input type="text" name="email"
                        onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div>
                <h4>Don't have an account? <a href="/register">Register here</a></h4>

            </div>
        </div>
    )
}

export default Login;
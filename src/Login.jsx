import React, { useState } from "react";
// import './style.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>

                <div id="content">
                    <h1>Login</h1>
                    <label htmlFor="">Email ID</label><br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" id="email" placeholder="hello@gmail.com"/> <br />

                    <label htmlFor="">Password</label><br />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="" id="pass" placeholder="**********"/> <br />

                    <button type="button">Login</button>
                    <p onClick={() => props.onFormSwitch('Registration')}>Don't have an account Register here!</p>
                </div>
            </form>
        </div>
    )
}
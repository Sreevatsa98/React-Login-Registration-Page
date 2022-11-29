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

        <form onSubmit={handleSubmit}>

            <div id="content">
                <label htmlFor="">Email ID</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" id="email" placeholder="hello@gmail.com"/>

                <label htmlFor="">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="" id="pass" placeholder="**********"/>

                <button type="button">Login</button>
                <p onClick={() => props.onFormSwitch('Registration')}>Don't have an account Register here!</p>
            </div>
        </form>
    )
}
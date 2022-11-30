import React, { useState } from "react";

//Form validation
import { useForm } from 'react-hook-form';
import { Registration } from "./Registration";
import { Userdata } from "./Userdata";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import './style.css';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();

        const emailval = "test@gmail.com";
        const passval = "test@123";

        if(email != 0 || password != 0){
            if (email === emailval && password === passval){
                alert("Successful");
                console.log(email)
                // document.getElementById("lform").submit();
            }
            else{
                console.log("error");
                alert("error");
            }   
        }
        else {
            alert("Enter valid Input")
        }
        <Userdata />

    }

    return (
        <div className="form">
            <form id="lform" className="login-form" action="Userdata.jsx" onSubmit={handleSubmit}>
            {/* handleSubmit(required) */}

                <div id="content">
                    <h1>Login</h1>
                    <label htmlFor="">Email ID</label><br />
                    <input type="text" id="email" placeholder="hello@gmail.com" required
                    onChange={(e)=>setEmail(e.target.value)} value={email}/> <br />

                    <label htmlFor="">Password</label><br />
                    <input type="password" id="password" placeholder="**********" required
                    onChange={(e)=>setPassword(e.target.value)} value={password}/> <br />

                    <button type="submit" >Login</button>
                    <p id="lpara" onClick={() => props.onFormSwitch('Registration')}>Don't have an account Register here!</p>
                </div>
            </form>
        </div>
    )
}
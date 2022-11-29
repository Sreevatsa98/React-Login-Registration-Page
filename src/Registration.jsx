import React, { useState } from "react";

export const Registration = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

        <div className="auth-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                {/* <div>hello</div> */}
                <div id="content">
                    <h1>Registration</h1>

                    <label htmlFor="name">Full Name</label><br />
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="name" placeholder="Sam"/> <br />

                    <label htmlFor="email">Email ID</label><br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" id="email" placeholder="hello@gmail.com"/> <br />

                    <label htmlFor="password">Password</label> <br />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="" id="pass" placeholder="**********"/> <br />

                    <button type="button">Login</button>
                    <p onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here!</p>
                    {/* <p onClick={() => props.onFormSwitch('Registration')}>Don't have an account register here!</p> */}
                </div>
            </form>
        </div>
    )
}
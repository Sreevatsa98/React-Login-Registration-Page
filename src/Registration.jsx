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

        <form onSubmit={handleSubmit}>
            {/* <div>hello</div> */}
            <div id="content">

                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="name" placeholder="Sam"/>

                <label htmlFor="email">Email ID</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="" id="email" placeholder="hello@gmail.com"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="" id="pass" placeholder="**********"/>

                <button type="button">Login</button>
                <p onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here!</p>
                {/* <p onClick={() => props.onFormSwitch('Registration')}>Don't have an account register here!</p> */}
            </div>
        </form>
    )
}
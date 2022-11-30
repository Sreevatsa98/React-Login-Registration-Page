import React, { useState } from "react";

//Form validation
import { useForm } from 'react-hook-form';

//Excel Sheet
import axios from 'axios';

export const Registration = (props) => {

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // //Error
        // if(name.length==0||email.length==0||password.length==0||mobile.length==0){
        //     setError(true)
        // }


        console.log(name,email,password,mobile);

        const data = {
            name:name,
            email:email,
            password:password,
            mobile:mobile
        }
        axios.post('https://sheet.best/api/sheets/872604eb-e060-4c25-879a-adc24e766b63', data).then((response)=>{
            console.log(response);
            //Clearing the fields
            setName('');
            setEmail('');
            setPassword('');
            setMobile('');
        })
    }

    return (

        <div className="auth-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
                {/* <div>hello</div> */}
                <div id="content">
                    <h1>Registration</h1>

                    <label htmlFor="name">Full Name</label><br />
                    {/* <span>{errors.name?.type==="required" && "*Enter Name Reqired"}</span>
                    <span>{errors.name?.type==="maxLength" && "*Name exceed 20 character"}</span>
                    <span>{errors.name?.type==="minLength" && "*Should have atleast 3 char"}</span> */}
                   {/* <span>
                   {errors.email?.type=="0" && "*Email Reqired"}</span> */}
                    <input type="text" /*{...register("name",{required:true,
                    pattern: {
                        value: /^[A-Za-z]+$/i
                        // message: 'Please enter a valid email',
                    }, maxLength: 20, minLength: 3
                    })}*/ id="name" placeholder="Sam"
                    onChange={(e)=>setName(e.target.value)} value={name}/> <br />

                    <label htmlFor="email">Email ID</label><br />
                    {/* <span>{errors.email?.type==="required" && "*Email Reqired"}</span>
                    <span>{errors.email?.type==="pattern" && "*Valid Email Required"}</span> */}
                    <input type="text" /*{...register("email",{required:true,
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        // message: 'Please enter a valid email',
                    },
                    })}*/ id="email" placeholder="hello@gmail.com"
                    onChange={(e)=>setEmail(e.target.value)} value={email}/> <br />

                    <label htmlFor="password">Password</label> <br />
                    {/* <span>{errors.password?.type==="required" && "*Valid Passwd Reqired"}</span>
                    <span>{errors.password?.type==="pattern" && "*Password should contain Minimum 8 and Maximum 20 Characters, at Least 1 Uppercase Letter, 1 Lowercase Letter, 1 Number and 1 Special Character: "}</span> */}
                    <input type="password" /*{...register("password",{required:true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                        // message: 'Please enter a valid email'
                    },
                    })}*/ id="pass" placeholder="**********"
                    onChange={(e)=>setPassword(e.target.value)} value={password}/> <br />

                    {/* <label htmlFor="conpassword">Confirm Password</label> <br />
                    <input type="password" id="conpass" placeholder="**********"/> <br /> */}

                    <label htmlFor="mobile">Mobile Number</label> <br />
                    {/* <span>{errors.mobile?.type==="required" && "*Mobile Reqired"}</span>
                    <span>{errors.mobile?.type==="maxLength" && "*Enter only 10 Digits"}</span>
                    <span>{errors.mobile?.type==="minLength" && "*Enter Minimum 10 Digits"}</span>
                    <span>{errors.mobile?.type==="pattern" && "*Valid Mobile Reqired"}</span> */}
                    <input type="text"  /*{...register("mobile",{required:true, maxLength: 10, minLength: 10,
                    pattern: {
                        value: /[7-9]{1}[0-9]{9}/,
                        // message: 'Please enter a valid email'
                    },
                    
                    })}*/ id="mobile" placeholder="987-456-7890"
                    onChange={(e)=>setMobile(e.target.value)} value={mobile}/> <br />
                    
                    {/* <span>{errors.mobile?.type==="required" && "Mobile Number Reqired"}</span><br />
                    <span>{errors.email?.type==="required" && "Valid Email Id Reqired"}</span> */}

                    <button type="submit">Login</button>
                    <p onClick={() => props.onFormSwitch('login')}>Already have an account? Login Here!</p>
                    {/* <p onClick={() => props.onFormSwitch('Registration')}>Don't have an account register here!</p> */}
                </div>
            </form>
        </div>
    )
}
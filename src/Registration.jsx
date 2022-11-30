import React, { useState } from "react";

//Form validation
import { useForm } from 'react-hook-form';

export const Registration = (props) => {

    const { register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = dataa => console.log(dataa);

    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [name, setName] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    return (

        <div className="auth-form-container">
            <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                {/* <div>hello</div> */}
                <div id="content">
                    <h1>Registration</h1>

                    <label htmlFor="name">Full Name</label><br />
                    <span>{errors.name?.type==="required" && "*Enter Name Reqired"}</span>
                    <span>{errors.name?.type==="maxLength" && "*Name exceed 20 character"}</span>
                    <span>{errors.name?.type==="minLength" && "*Should have atleast 3 char"}</span>
                    <input type="text" {...register("name",{required:true,
                    pattern: {
                        value: /^[A-Za-z]+$/i
                        // message: 'Please enter a valid email',
                    }, maxLength: 20, minLength: 3
                    })} id="name" placeholder="Sam"/> <br />

                    <label htmlFor="email">Email ID</label><br />
                    <span>{errors.email?.type==="required" && "*Email Reqired"}</span>
                    <span>{errors.email?.type==="pattern" && "*Valid Email Required"}</span>
                    <input type="text" {...register("email",{required:true,
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        // message: 'Please enter a valid email',
                    },
                    })} id="email" placeholder="hello@gmail.com"/> <br />

                    <label htmlFor="password">Password</label> <br />
                    <span>{errors.password?.type==="required" && "*Valid Passwd Reqired"}</span>
                    <span>{errors.password?.type==="pattern" && "*Password should contain Minimum 8 and Maximum 20 Characters, at Least 1 Uppercase Letter, 1 Lowercase Letter, 1 Number and 1 Special Character: "}</span>
                    <input type="password" {...register("password",{required:true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                        // message: 'Please enter a valid email'
                    },
                    })} id="pass" placeholder="**********"/> <br />

                    {/* <label htmlFor="conpassword">Confirm Password</label> <br />
                    <input type="password" id="conpass" placeholder="**********"/> <br /> */}

                    <label htmlFor="mobile">Mobile Number</label> <br />
                    <span>{errors.mobile?.type==="required" && "*Mobile Reqired"}</span>
                    <span>{errors.mobile?.type==="maxLength" && "*Enter only 10 Digits"}</span>
                    <span>{errors.mobile?.type==="minLength" && "*Enter Minimum 10 Digits"}</span>
                    <span>{errors.mobile?.type==="pattern" && "*Valid Mobile Reqired"}</span>
                    <input type="text" {...register("mobile",{required:true, maxLength: 10, minLength: 10,
                    pattern: {
                        value: /[7-9]{1}[0-9]{9}/,
                        // message: 'Please enter a valid email'
                    },
                    
                    })} id="mobile" placeholder="987-456-7890"/> <br />
                    
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
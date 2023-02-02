import React, { useState } from "react";
//import logo from "./images/Logo.jpeg";
//import google from "./images/google.png";


export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(email);
    }

    return (
        <div className="auth-form-container">

            <div className="logoimg">
                <img src="./images/Logo.jpeg" alt="hello" />
                <h2>Register</h2>
            </div>


            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="name"></label>
                <input value={name} name="name" id="name" placeholder="Username"></input>
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Mobile number or Email" id="email" name="email"></input>
                <label htmlFor="password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className="button1" type="submit">Register</button>
            </form>


            <label htmlFor="" className="l1-r">Already have an account?<button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here.</button></label>

            <label htmlFor="" class="or-r">OR</label>
            <button class="btn-r btn-google-r">
                <span class="icon-r texting-r">
                    <img src="./images/google.png" className="imgc" alt="google" />
                    Sign-in with Google
                </span>
            </button>

        </div>
    );


}

export default Register
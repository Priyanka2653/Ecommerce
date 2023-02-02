import React, { useState } from "react";
//import logo from "./images/Logo.jpeg";
// import google from "./images/google.png";


export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(email);
    }


    return (

        <div className="auth-form-container">

            <div className="logoimg">
                <img src="./images/Logo.jpeg" alt="hello" />
                <h2 > Login</h2>
            </div>


            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Username or Email Address" id="email" name="email"></input>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <a className="forgot" href="#">Forgot Password?</a>
                <button className="button1" type="submit">Login</button>

            </form>
            <label htmlFor="" className="l1">Don't have an account?<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here.</button></label>
            <label htmlFor="" class="or">OR</label>
            <button class="btn-l btn-google-l">
                <span class="icon-l texting-l">
                    <img src="./images/google.png" alt="google" className="imgc" />

                </span>
                <span>Sign-in with Google</span>
            </button>

        </div>
    );


}
export default Login
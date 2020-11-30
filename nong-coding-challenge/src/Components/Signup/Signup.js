import React from "react";
import "./Signup.css";

function SignUp () {
    return (
        <div>
        <p className="sign-up-paragraph">Please sign up!</p>
        <input className="email-input" alt="user-email" placeholder="enter a valid email address"></input>
        <br></br>
        <input className="password-input" alt="user-password"  type="password" placeholder="enter a password"></input>
        <br></br>
        <input className="password-repeat-input" alt="repeat-user-password" type="password" placeholder="enter your password again"></input>
        <br></br>
        <button className="submit-button">Submit</button>
        </div>
    )
}

export default SignUp;
import React from "react";
import "./SignIn.css";

function SignIn () {
    return (
        
        <div>
        <p className="opening-paragraph">Please sign in or if your new here, please sign up!</p>
        <input className="user-email" placeholder="email"></input>
        <br></br>
        <input type="password" className="user-password" placeholder="password"></input>
        <br></br>
        <button className="Sign-in-button">Sign In</button>
        <button className="Sign-up-button">Sign Up</button>
        </div>
        
    )
}

export default SignIn;
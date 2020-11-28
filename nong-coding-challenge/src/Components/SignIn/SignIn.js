import React from "react";
import "./SignIn.css"

function SignIn () {
    return (
        <div>
        <input className="user-email" placeholder="email"></input>
        <br></br>
        <input className="user-password" placeholder="password"></input>
        <br></br>
        <button className="Sign-in-button">Sign In</button>
        </div>
    )
}

export default SignIn;
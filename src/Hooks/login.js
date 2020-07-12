import React, { useState, useEffect } from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";

export default function Login() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/login", values);

    return (
        <div>
            <div className="welcomeHeader">
                <div className="logo">
                    <p>Collect</p>
                </div>
                <div className="nav">
                    {/* <Link to={"/login"}>
                        <button className="logButt">LOGIN</button>
                    </Link>
                    <Link to={"/register"}>
                        <button className="signButt">SIGN UP</button>
                    </Link> */}
                </div>
            </div>
            <h1 className="login">login</h1>
            <img className="cloud2" src="images/cloud.png" />
            <img className="dinner" src="images/chill.png" />
            <img className="code2" src="images/code.png" />
            <img className="lock2" src="images/protection.png" />
            <img className="care2" src="images/care.png" />
            <img className="contract2" src="images/contract.png" />

            <div className="logFlex">
                {error && <p>Ops...something went wrong</p>}
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Log In</button>
                {/* <div className="newFlex">
                    <p>new here?</p>
                    <button>SIGN UP</button>
                </div> */}
            </div>
            <div className="logFooter"></div>
        </div>
    );
}

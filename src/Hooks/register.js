import React from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";

export default function Register() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/register", values);

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
            {error && <p>Ops...something went wrong</p>}
            <input
                name="first"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                name="last"
                placeholder="Last Name"
                onChange={handleChange}
            />
            <input
                name="location"
                placeholder="Location"
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

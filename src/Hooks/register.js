import React from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";
import { Link } from "react-router-dom";

export default function Register() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/register", values);

    return (
        <div>
            <div className="welcomeHeader">
                <div className="logo">
                    <Link className="logoLink" to={"/"}>
                        <p>Collect</p>
                    </Link>
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
            {error && <p className="regError">Ops...something went wrong</p>}
            <h1 className="sign">sign up</h1>
            <img className="cont" src="images/cont.png" />
            <img className="coca" src="images/coca.png" />
            <img className="chop" src="images/chop.png" />
            <img className="tuna" src="images/tuna.png" />
            <img className="chips" src="images/chips.png" />
            <img className="cup" src="images/cup.png" />
            <img className="pizza" src="images/pizza.png" />
            <div className="regInp">
                <input
                    className="one"
                    name="first"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    className="two"
                    name="last"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <input
                    className="tre"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />
                <input
                    className="quattro"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    className="cinque"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    className="sei"
                    name="repeatPassword"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button className="sigButt" onClick={handleClick}>
                SIGN UP
            </button>
        </div>
    );
}

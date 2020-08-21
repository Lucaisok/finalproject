import React from "react";
import { Link } from "react-router-dom";
import CookieCons from "./Hooks/cookieCons";

export default function Home() {
    return (
        <div className="welcomeBody">
            <div className="welcomeHeader">
                <div className="logo">
                    <p>Collect</p>
                </div>
                <div className="nav">
                    <Link to={"/login"}>
                        <button className="logButt">LOGIN</button>
                    </Link>
                    <Link to={"/register"}>
                        <button className="signButt">SIGN UP</button>
                    </Link>
                </div>
            </div>
            <div className="safeData">
                <h1>keeps</h1>
                <h3>
                    your customers{" "}
                    <span>
                        <br></br>
                    </span>
                    data in a safe and secure{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    place.
                </h3>
                <img className="lock" src="images/protection.png" />
                <img className="key" src="images/key.png" />
                <img className="cloud" src="images/cloud.png" />
                <img className="contracto" src="images/contracto.png" />
            </div>
            <div className="days">
                <h1>after 14 days</h1>
                <h3>
                    all your customers{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    data will be automatically{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    deleted
                </h3>
                <img className="edit" src="images/edit.png" />
                <img className="erase" src="images/erase.png" />
                <img className="surface" src="images/surface1.png" />
                <img className="delete" src="images/delete.png" />
                <img className="plant" src="images/sprout.png" />
            </div>
            <div className="paper">
                <h1>no more paper</h1>
                <img className="contract" src="images/contract.png" />
                <h3>
                    no more waste{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    no more mess{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    all the data are safely collected in{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    our database{" "}
                </h3>
                <img className="world" src="images/care.png" />
                <img className="wood" src="images/wood.png" />
            </div>
            <div className="use">
                <h1>how to use ?</h1>
                <h3 className="puntoUno">
                    1. generate the QR code{" "}
                    <span>
                        <br></br>
                    </span>{" "}
                    for your customers
                </h3>
                <h3 className="puntoDue">2. they will fill the form</h3>
                <h3 className="puntoTre">3. it´s done!</h3>
                <img className="search" src="images/search.png" />
                <img className="code" src="images/code.png" />
                <img className="qr" src="images/qr.png" />
            </div>
            <div className="footer">
                <p className="developed">
                    Developed with <span className="heart"> ❤</span>in Berlin
                </p>
                <div className="about">
                    <p>About us</p>
                    <p>Contact</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className="social">
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="social">
                    <p>Subscribe to our newsletter</p>
                    <div className="newsletter">
                        <input placeholder="Email Address" />
                        <button>OK</button>
                    </div>
                </div>
                <div className="social">
                    <p>Hohenstaufenstr. 35</p>
                    <p>+49 173 4287628</p>
                    <p>lucatomarelli1@gmail.com</p>
                </div>
            </div>
            <CookieCons />
        </div>
    );
}

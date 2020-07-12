import React from "react";
import { Link } from "react-router-dom";

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
            </div>
        </div>
    );
}

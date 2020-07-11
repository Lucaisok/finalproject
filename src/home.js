import React from "react";

export default function Home() {
    return (
        <div className="welcomeBody">
            <div className="welcomeHeader">
                <div className="logo">
                    <p>Collect</p>
                </div>
                <div className="nav">
                    <button className="logButt">LOGIN</button>
                    <button className="signButt">SIGN UP</button>
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
        </div>
    );
}

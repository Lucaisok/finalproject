import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
    return (
        <div className="thankContainer">
            <div className="welcomeHeader">
                <div className="logo">
                    <Link className="name" to={"/welcome"}>
                        <p>Collect</p>
                    </Link>
                </div>
                <div className="nav"></div>
            </div>
            <h1 className="uno">Thank you</h1>
            <h3 className="cacchio">
                Choosing Collect means{" "}
                <span>
                    <br></br>
                </span>
                saving a lot of paper{" "}
                <span>
                    <br></br>
                </span>
                and therefore, trees!
            </h3>
            <img src="images/care.png" className="thankCare"></img>
            <h1 className="bru">do not worry</h1>
            <h3 className="due">
                all your data will be{" "}
                <span>
                    <br></br>
                </span>
                automatically deleted{" "}
                <span>
                    <br></br>
                </span>
                after 14 days
            </h3>
        </div>
    );
}

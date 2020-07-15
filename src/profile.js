import React, { useState, useEffect } from "react";
import Generator from "./generator";
import { useStatefulFields } from "./Hooks/useStatefulFields";
import axios from "./axios";

export default function Profile(props) {
    const [values, handleChange] = useStatefulFields();
    // const [customers, setCustomers] = useState([]);
    const [customers, setCustomers] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        axios
            .post("/customersData", values)
            .then((data) => {
                console.log(data);
                console.log(data.data);
                setCustomers(data.data);
                console.log("??", customers);
            })
            .catch((err) => console.log(err));
    };

    const logOut = () => {
        axios.get("/logout").then(() => {
            location.replace("/");
        });
    };

    useEffect(() => {
        console.log(customers);
    }, [customers]);

    return (
        <div className="profileContainer">
            <div className="welcomeHeader">
                <div className="logo">
                    <p>Collect</p>
                </div>
                <div className="nav">
                    <h4>{props.location}</h4>
                    <button className="logButt" onClick={logOut}>
                        LOG OUT
                    </button>{" "}
                </div>
            </div>
            <h4 className="info">
                Search customer by{" "}
                <span>
                    <br></br>
                </span>{" "}
                name and surname
            </h4>
            <div className="searchCont">
                <input
                    onChange={handleChange}
                    className="firstName"
                    name="firstName"
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    className="lastName"
                    name="lastName"
                    placeholder="Last Name"
                />
                <button onClick={handleClick}>Search</button>
            </div>
            <h4 className="info2">
                Retrieve data about all customers{" "}
                <span>
                    <br></br>
                </span>{" "}
                present at the same date and time
            </h4>
            <h4 className="info3">
                Generate QR Code in order to{" "}
                <span>
                    <br></br>
                </span>{" "}
                access your dedicated form !
            </h4>
            <div className="resultsContainer">
                {customers.map((person, idx) => {
                    return (
                        <div key={idx} className="person">
                            <p>
                                <strong>
                                    {person.first}{" "}
                                    <span>
                                        <br></br>
                                    </span>{" "}
                                    {person.last}
                                </strong>
                            </p>
                            <p>
                                <span>&#9993;</span>
                                {person.email}
                            </p>
                            <p>
                                <span>&#9743;</span>
                                {person.tel}
                            </p>
                        </div>
                    );
                })}
            </div>
            <Generator location={props.location} />
            <div className="footer2">
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
        </div>
    );
}

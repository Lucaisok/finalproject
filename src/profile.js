import React, { useState, useEffect } from "react";
import Generator from "./generator";
import { useStatefulFields } from "./Hooks/useStatefulFields";
import axios from "./axios";

export default function Profile(props) {
    const [values, handleChange] = useStatefulFields();
    const [customers, setCustomers] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        axios
            .post("/customersData", values)
            .then((data) => {
                if (data.data.success === false) {
                    setErrorMessage(true);
                } else {
                    console.log("MEEEEEE", data);
                    console.log("HERE", data.data);
                    setCustomers(data.data);
                    setIsVisible(true);
                    setMessage(
                        `Here is a list of all the customers present at the same date and time of ${
                            data.data[0].first + " " + data.data[0].last
                        }, please get in touch with them as soon as possible!`
                    );
                    setErrorMessage(false);
                    console.log("??", customers);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const logOut = () => {
        axios.get("/logout").then(() => {
            location.replace("/");
        });
    };

    const closeModal = () => {
        setIsVisible(false);
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
            <div className="elements">
                <div>
                    <h4 className="info">
                        Search customer by{" "}
                        <span>
                            <br></br>
                        </span>{" "}
                        name and surname
                    </h4>
                    {errorMessage && (
                        <p className="noResult">
                            Looks like this customer is not present in our
                            database!
                        </p>
                    )}
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
                </div>
                <div>
                    {isVisible && (
                        <div>
                            <div className="resultsContainer">
                                <p className="closer" onClick={closeModal}>
                                    X
                                </p>
                                <p className="message">{message}</p>
                                {customers.map((person, idx) => {
                                    if (customers.indexOf(person) == 0) {
                                        return;
                                    } else {
                                        return (
                                            <div key={idx} className="person">
                                                <p>
                                                    <strong>
                                                        {person.first +
                                                            " " +
                                                            person.last}
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
                                    }
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <Generator location={props.location} />
                </div>
            </div>
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

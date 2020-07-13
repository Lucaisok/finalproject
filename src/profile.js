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
                    <button className="logButt" onClick={logOut}>
                        LOG OUT
                    </button>{" "}
                </div>
            </div>
            <h3>
                Hi {props.first},{" "}
                <span>
                    <br></br>
                </span>
                enjoy your day at {props.location}
            </h3>
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
            <div className="resultsContainer">
                {customers.map((person, idx) => {
                    return (
                        <div key={idx} className="person">
                            <p>
                                <strong>
                                    {person.first + " " + person.last}
                                </strong>
                            </p>
                            <p>{person.email}</p>
                            <p>{person.tel}</p>
                        </div>
                    );
                })}
            </div>
            <Generator location={props.location} />
        </div>
    );
}

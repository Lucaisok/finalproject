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

    useEffect(() => {
        console.log(customers);
    }, [customers]);

    return (
        <div>
            <h1>
                {props.first} {props.last} {props.location}
            </h1>
            <input
                onChange={handleChange}
                className="firstName"
                name="firstName"
                placeholder="Enter First Name"
            />
            <input
                onChange={handleChange}
                className="lastName"
                name="lastName"
                placeholder="Enter Last Name"
            />
            <button onClick={handleClick}>Search</button>
            <Generator location={props.location} />
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";

export default function Login() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/login", values);

    return (
        <div>
            {error && <p>Ops...something went wrong</p>}
            <input name="email" placeholder="Email" onChange={handleChange} />
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

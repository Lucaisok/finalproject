import React, { useState } from "react";
import axios from "../axios";

export function useAuthSubmit(path, values) {
    const [error, setError] = useState(false);
    const handleClick = () => {
        axios
            .post(path, values)
            .then(({ data }) => {
                console.log(data);
                if (!data.success) {
                    setError(true);
                } else {
                    if (path == "/login" || path == "/register") {
                        location.replace("/");
                    } else {
                        location.replace("/thanks"); //to be created
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    };
    return [error, handleClick];
}

import React, { useState } from "react";
import axios from "../axios";

export function useAuthSubmit(path, values) {
    const [error, setError] = useState(false);
    const handleClick = () => {
        async () => {
            try {
                const { data } = await axios.post(path, values);
                if (!data.success) {
                    setError(true);
                } else {
                    location.replace("/");
                }
            } catch (err) {
                console.log(err);
            }
        };
    };
    return [error, handleClick];
}

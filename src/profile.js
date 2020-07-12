import React from "react";
import Generator from "./generator";

export default function Profile(props) {
    return (
        <div>
            <h1>
                {props.first} {props.last}
            </h1>
            <Generator />
        </div>
    );
}

import React from "react";
import Generator from "./generator";

export default function Profile(props) {
    return (
        <div>
            <h1>
                {props.first} {props.last} {props.location}
            </h1>
            <Generator location={props.location} />
        </div>
    );
}

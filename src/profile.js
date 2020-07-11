import React from "react";

export default function Profile(props) {
    return (
        <div>
            <h1>
                {props.first} {props.last}
            </h1>
        </div>
    );
}

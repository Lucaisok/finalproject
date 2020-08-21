import React, { useState, useEffect } from "react";

export default function CookieCons() {
    const [isVisib, setIsVisib] = useState(false);

    useEffect(() => {
        let firstTime = localStorage.getItem("first_time");
        if (!firstTime) {
            setIsVisib(true);
        } else {
            return;
        }
    });

    const handleClick = () => {
        setIsVisib(false);
        localStorage.setItem("first_time", "1");
    };

    return (
        <div>
            {isVisib && (
                <div className="cookiesModal">
                    <h3>
                        This Website uses cookies to ensure you get the best
                        experience on our website
                    </h3>
                    <button onClick={handleClick}>OK</button>
                </div>
            )}
        </div>
    );
}

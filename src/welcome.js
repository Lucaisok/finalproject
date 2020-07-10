import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./home";
import Login from "./Hooks/login";
import Register from "./Hooks/register";

export default function Welcome() {
    return (
        <div>
            <HashRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}

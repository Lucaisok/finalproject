import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import App from "./app";

// let elem;
// const userIsLoggedIn = location.pathname != "/welcome";

// if (!userIsLoggedIn) {
//     elem = <Welcome />;
// } else {
//     elem = <App />;
// }

ReactDOM.render(<Welcome />, document.querySelector("main"));

// function HelloWorld() {
//     return (
//         <div>Hello, World!</div>
//     );
// }

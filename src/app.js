import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./profile";
import Thanks from "./Hooks/thanks";
import UserForm from "./Hooks/userForm";
import Generator from "./generator";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get("/user");
            console.log("data from server: ", data);
            this.setState({
                first: data.first,
                last: data.last,
                email: data.email,
                location: data.location,
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Profile
                            first={this.state.first}
                            last={this.state.last}
                            email={this.state.email}
                            location={this.state.location}
                        />
                    )}
                />
                <Route exact path="/thanks" component={Thanks} />
                <Route
                    path="/userForm/:locale"
                    render={(props) => (
                        <UserForm
                            location={this.state.location}
                            key={props.match.url}
                            match={props.match}
                            history={props.history}
                        />
                    )}
                />
                <Route
                    exact
                    path="/generator"
                    render={() => <Generator location={this.state.location} />}
                />
            </BrowserRouter>
        );
    }
}

export default App;

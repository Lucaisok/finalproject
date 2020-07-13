import React, { Component } from "react";
import QRCode from "qrcode";
import UserForm from "./Hooks/userForm";
import axios from "./axios";

export default class Qrcode extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateQR() {
        let location = this.props.location;
        let str = `http://localhost:8080/userForm/${location}`; // can not add /this.props.location to URL

        QRCode.toCanvas(document.getElementById("canvas"), str, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("success");
            }
        });
    }

    render() {
        return (
            <div>
                <canvas width="250" height="250" id="canvas" align="center" />
                <button onClick={() => this.generateQR()}>
                    Generate QRCode
                </button>
                <p>{this.props.location}</p> this is the string we need to
                attach to str
                {/* <UserForm location={this.props.location} /> */}
            </div>
        );
    }
}

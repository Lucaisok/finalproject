import React, { Component } from "react";
import QRCode from "qrcode";

export default class Qrcode extends Component {
    generateQR() {
        let str = "My first QR!";

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
                <button onClick={this.generateQR}>Generate QRCode</button>
            </div>
        );
    }
}

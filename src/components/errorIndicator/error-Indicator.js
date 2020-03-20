import React, { Component } from "react";
import "./error-Indicator.css";

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className="ErrorIndicator">
                <h2>Oooooops...</h2>
                <div>Something has gone wrong!</div>
                <div>(but the droids will fix it soon)</div>
            </div>
        );
    }
}

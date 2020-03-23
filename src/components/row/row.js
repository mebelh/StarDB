import React, { Component } from "react";
import "./row.css";
export default class Row extends Component {
    render() {
        const { left, right } = this.props;
        return (
            <div className="row-container">
                <span className="row-container-piese">{left}</span>
                <span className="row-container-piese">{right}</span>
            </div>
        );
    }
}

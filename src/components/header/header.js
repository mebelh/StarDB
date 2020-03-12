import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="App-logo">
                    <a href="#">Star DB</a>
                </h1>
                <ul>
                    <li>
                        <a href="#" className="btn btn-secondary">
                            People
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn btn-secondary">
                            Planets
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn btn-secondary">
                            Starships
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

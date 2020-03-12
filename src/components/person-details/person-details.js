import React, { Component } from "react";

import "./person-details.css";

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details">
                <img
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                    alt="img"
                />
                <div>
                    <h2>R2-D2</h2>
                    <ul className="">
                        <li>Gener male</li>
                        <li>Birth year 43</li>
                        <li>Eye color red</li>
                    </ul>
                </div>
            </div>
        );
    }
}

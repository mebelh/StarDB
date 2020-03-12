import React from "react";
import { Component } from "react";
import SwapiService from "../../services/services";

import "./random-planet.css";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    onPlanetLoaded = planet => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = 12;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    render() {
        const {
            planet: { id, population, name, rotationPer, diameter }
        } = this.state;
        return (
            <div className="random-planet">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt="img"
                    className="random-planet__planet-img"
                />
                <div className="random-planet__planet-info">
                    <h2>{name}</h2>
                    <ul className="">
                        <li>
                            <span>Population </span>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span>Rotation period </span>
                            <span>{rotationPer}</span>
                        </li>
                        <li>
                            <span>Diameter </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

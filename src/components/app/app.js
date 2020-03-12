import React, { Component } from "react";

import Header from "../header/index";
import ItemList from "../item-list/index";
import PersonDetails from "../person-details/index";
import PlanetDetails from "../planet-details/index";
import RandomPlanet from "../random-planet/index";
import StarshipDetails from "../starship-details/index";

import "./app.css";

export default class App extends Component {
    render() {
        return (
            <div className="container app-container">
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                </div>
                <div className="">
                    <PersonDetails />
                </div>
            </div>
        );
    }
}

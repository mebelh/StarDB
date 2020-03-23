import React, { Component } from "react";

import Header from "../header/index";
import RandomPlanet from "../random-planet/index";
import SwapiService from "../../services/services";
import PeoplesPage from "../pages/peoples-page/peoples-page";

import "./app.css";
import Row from "../row/row";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
            <div className="app-container container">
                <Header />
                <RandomPlanet />
                <PeoplesPage getData={this.swapiService} />
            </div>
        );
    }
}

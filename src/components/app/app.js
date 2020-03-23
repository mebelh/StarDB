import React, { Component } from "react";

import Header from "../header/index";
import ItemList from "../item-list/index";
import PersonDetails from "../person-details/index";
import PlanetDetails from "../planet-details/index";
import RandomPlanet from "../random-planet/index";
import StarshipDetails from "../starship-details/index";
import "./app.css";
import SwapiService from "../../services/services";

export default class App extends Component {
    state = {
        selectedPerson: 1
    };

    swapiService = new SwapiService();

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return (
            <div className="app-container container">
                <Header />
                <RandomPlanet />

                <div className="persons-persondetails">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                    />
                    <PersonDetails
                        personId={this.state.selectedPerson}
                        getData={this.swapiService.getPerson}
                    />
                </div>

                <ItemList getData={this.swapiService.getAllPlanets} />
            </div>
        );
    }
}

import React, { Component } from "react";

import Header from "../header/index";
import ItemList from "../item-list/index";
import ItemDetails from "../item-details/index";
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
                        renderItem={item => {
                            return (
                                <span
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "100%"
                                    }}
                                >
                                    <span>{item.name}</span>
                                    <span>{item.birthYear}</span>
                                </span>
                            );
                        }}
                    />
                    <ItemDetails
                        personId={this.state.selectedPerson}
                        getData={this.swapiService.getPerson}
                    />
                </div>{" "}
                <div className="persons-persondetails">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets}
                        renderItem={item => item.name}
                    />
                    <ItemDetails
                        personId={this.state.selectedPerson}
                        getData={this.swapiService.getAllPlanets}
                    />
                </div>{" "}
                <div className="persons-persondetails">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllStarships}
                        renderItem={item => item.name}
                    />
                    <ItemDetails
                        personId={this.state.selectedPerson}
                        getData={this.swapiService.getPerson}
                    />
                </div>
            </div>
        );
    }
}

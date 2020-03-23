import React, { Component } from "react";

import Header from "../header/index";
import ItemList from "../item-list/index";
import ItemDetails from "../item-details/index";
import RandomPlanet from "../random-planet/index";
import SwapiService from "../../services/services";
import PeoplesPage from "../pages/peoples-page/peoples-page";

import "./app.css";

export default class App extends Component {
    swapiService = new SwapiService();

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id
        });
    };
    state = {
        selectedPerson: 1
    };

    render() {
        return (
            <div className="app-container container">
                <Header />
                <RandomPlanet />
                <PeoplesPage getData={this.swapiService} />
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

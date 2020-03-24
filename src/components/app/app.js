import React, { Component } from "react";

import Header from "../header/index";
import RandomPlanet from "../random-planet/index";
import SwapiService from "../../services/services";
import PeoplesPage from "../pages/peoples-page/index";

import "./app.css";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row/row";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        const {
            getPerson,
            getStarship,
            getPersonImg,
            getStarshipImg
        } = this.swapiService;

        const personData = (
            <ItemDetails
                itemId={4}
                getData={getPerson}
                getImgUrl={getPersonImg}
            >
                <Record field={"gender"} label={"Gender"} />
                <Record field={"eyeColor"} label={"Eye Color"} />
            </ItemDetails>
        );

        const starshipData = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImgUrl={getStarshipImg}
            ></ItemDetails>
        );

        return (
            <div className="app-container container">
                {/* <Header />
                <RandomPlanet />
                <PeoplesPage getData={this.swapiService} /> */}
                <Row left={personData} right={starshipData} />
            </div>
        );
    }
}

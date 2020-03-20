import React from "react";
import { Component } from "react";
import SwapiService from "../../services/services";
import "./random-planet.css";
import Loading from "../loading";
import ErrorIndicator from "../errorIndicator/error-Indicator";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        imgUrl: null,
        loading: true,
        error: false
    };

    onPlanetLoaded = planet => {
        this.setState({ planet, loading: false });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updatePlanet();
        }, 5000);
    }

    render() {
        const { planet, loading, error } = this.state;
        const spinner = loading ? <Loading /> : null;
        const hasData = loading || error;
        const content = !hasData ? (
            <PlanetView planet={planet} imgUrl={this.state.imgUrl} />
        ) : null;
        const errorIndicator = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        );
    }
}

const PlanetView = ({ planet, imgUrl }) => {
    const { id, population, name, rotationPer, diameter } = planet;

    return (
        <React.Fragment>
            <span className="random-planet__img">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt=""
                    className="random-planet__planet-img"
                />
            </span>
            <div className="random-planet__planet-info">
                <h2>{name}</h2>
                <ul className="">
                    <li>
                        <span>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotation period: </span>
                        <span>{rotationPer}</span>
                    </li>
                    <li>
                        <span>Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

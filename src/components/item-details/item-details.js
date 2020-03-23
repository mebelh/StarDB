import React, { Component } from "react";
import Spiner from "../loading/index";
import "./person-details.css";

export default class PersonDetails extends Component {
    state = {
        person: null
    };

    updatePerson = () => {
        const { personId, getData } = this.props;

        if (!personId) {
            return;
        }
        this.setState({
            person: null
        });
        getData(personId).then(person => {
            this.setState({ person });
        });
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    render() {
        if (!this.state.person) {
            return (
                <div className="person-details">
                    <Spiner />
                </div>
            );
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="img"
                />
                <div>
                    <h2>{name}</h2>
                    <ul className="">
                        <li>
                            <span>Gender: </span>
                            <span>{gender}</span>
                        </li>{" "}
                        <li>
                            <span>Birth year: </span>
                            <span>{birthYear}</span>
                        </li>{" "}
                        <li>
                            <span>Eye color: </span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

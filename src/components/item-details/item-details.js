import React, { Component } from "react";
import Spiner from "../loading/index";
import "./item-details.css";

export default class itemDetails extends Component {
    state = {
        item: null
    };

    updateitem = () => {
        const { itemId, getData } = this.props;

        if (!itemId) {
            return;
        }
        this.setState({
            item: null
        });
        getData(itemId).then(item => {
            this.setState({ item });
        });
    };

    componentDidMount() {
        this.updateitem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateitem();
        }
    }

    render() {
        if (!this.state.item) {
            return (
                <div className="item-details">
                    <Spiner />
                </div>
            );
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.item;

        return (
            <div className="item-details">
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

import React, { Component } from "react";
import SwapiService from "../../services/services";
import "./item-list.css";
import Spinner from "../loading/index";

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: []
    };

    componentDidMount() {
        this.swapiService.getAllPeople().then(peopleList => {
            this.setState({
                peopleList
            });
        });
    }

    renderItems = arr => {
        return arr.map(({ id, name }) => {
            return (
                <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={id}
                    onClick={() => {
                        this.props.onItemSelected(id);
                    }}
                >
                    {name}
                </li>
            );
        });
    };

    render() {
        const { peopleList } = this.state;
        const items = this.renderItems(peopleList);

        console.log(peopleList);

        if (peopleList.length === 0) {
            return <Spinner />;
        }

        return (
            <div className="item-list">
                <ul className="list-group">
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                        Luke Skywoker
                        <span className="badge badge-primary badge-pill">
                            14
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Darth Vader
                        <span className="badge badge-primary badge-pill">
                            2
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        R2-D2
                        <span className="badge badge-primary badge-pill">
                            1
                        </span>
                    </li> */}
                    {items}
                </ul>
            </div>
        );
    }
}

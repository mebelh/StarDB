import React, { Component } from "react";
import SwapiService from "../../services/services";
import "./item-list.css";
import Spinner from "../loading/index";

export default class ItemList extends Component {
    state = {
        peopleList: []
    };

    ggg = new SwapiService();

    componentDidMount() {
        const { getData } = this.props;

        console.log(getData);
        window.getData = getData;

        getData().then(peopleList => {
            this.setState({
                peopleList: peopleList
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
        const items =
            peopleList.length === 0 ? (
                <Spinner />
            ) : (
                this.renderItems(peopleList)
            );

        return (
            <div className="item-list">
                <ul className="list-group">{items}</ul>
            </div>
        );
    }
}

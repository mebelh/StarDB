import React, { Component } from "react";
import "./item-list.css";
import Spinner from "../loading/index";

export default class ItemList extends Component {
    state = {
        itemList: []
    };

    componentDidMount() {
        const { getData } = this.props;

        getData().then(itemList => {
            this.setState({
                itemList
            });
        });
    }

    renderItems = arr => {
        return arr.map(item => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={id}
                    onClick={() => {
                        this.props.onItemSelected(id);
                    }}
                >
                    {label}
                </li>
            );
        });
    };

    render() {
        const { itemList } = this.state;
        const items =
            itemList.length === 0 ? <Spinner /> : this.renderItems(itemList);

        return (
            <div className="item-list">
                <ul className="list-group">{items}</ul>
            </div>
        );
    }
}

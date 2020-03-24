import React, { Component } from "react";
import Spiner from "../loading/index";
import "./item-details.css";

const Record = (item, field, label) => {
    return (
        <li className="list-group-item">
            <span>{label}</span>
            <span>{field}</span>
        </li>
    );
};

export { Record };

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null
    };

    updateitem = () => {
        const { itemId, getData, getImgUrl } = this.props;

        if (!itemId) {
            return;
        }
        this.setState({
            item: null
        });
        getData(itemId).then(item => {
            this.setState({ item, image: getImgUrl(item) });
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

        // console.log(...this.props.children);

        return (
            <div className="item-details">
                <img src={this.state.image} alt="img" />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}

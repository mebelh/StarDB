import React, { Component } from "react";
import ItemList from "../../item-list/index";
import ItemDetails from "../../item-details/index";
import SwapiService from "../../../services/services";
export default class PeoplesPage extends Component {
    state = {
        selectedPerson: 1
    };

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return (
            <div className="persons-persondetails">
                <ItemList
                    onItemSelected={this.onPersonSelected}
                    getData={this.props.getData.getAllPlanets}
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
                    getData={this.props.getData.getPerson}
                />
            </div>
        );
    }
}

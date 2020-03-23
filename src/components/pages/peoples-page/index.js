import React, { Component } from "react";
import ItemList from "../../item-list/index";
import PersonDetails from "../../item-details/index";
export default class PeoplesPage extends Component {
    render() {
        return (
            <div className="persons-persondetails">
                <ItemList onItemSelected={this.onPersonSelected} getData />
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        );
    }
}

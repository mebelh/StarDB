import React, { Component } from "react";
import ItemList from "../../item-list/index";
import ItemDetails from "../../item-details/index";
import Row from "../../row/row";

export default class PeoplesPage extends Component {
    state = {
        selecteditem: 1
    };

    onItemSelected = id => {
        this.setState({
            selecteditem: id
        });
    };

    render() {
        const right = (
            <ItemDetails
                itemId={this.state.selecteditem}
                getData={this.props.getData.getPerson}
            />
        );
        const left = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.props.getData.getAllPeople}
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
        );

        return <Row left={left} right={right} />;
    }
}

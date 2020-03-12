import React, { Component } from "react";

import "./item-list.css";

export default class ItemList extends Component {
    render() {
        return (
            <div className="item-list">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
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
                    </li>
                </ul>
            </div>
        );
    }
}

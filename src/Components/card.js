import React, { Component } from "react";

export default class Card extends Component {
    render() {
        const popOutStyle = {
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.25)'
        }

        return (
            <div style={popOutStyle} className="popOut">
                <image></image>
            </div>
        );
    }
}
import React, { Component } from "react";

export default class Popout extends Component {

    handleClick = () => {
        this.props.toggle();
    };
    render() {
        const popOutStyle = {
            position: 'fixed',
            zIndex: '1',
            width: '50%',
            height: '50%',
            marginLeft: '100px',
            marginRight: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.25)'
        }
        const popOutContentStyle = {
            backgroundColor: 'white',
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '40%',
            padding: '20px',
        }
        const popOutCloseStyle = {
            color: 'Black',
            float: 'right'
        }

        return (
            <div style={popOutStyle} className="popOut">
                <div style={popOutContentStyle} className="popOutContent">
                    <span style={popOutCloseStyle} className="popOutClose" onClick={this.handleClick}>CLOSE</span>
                    <p>I'm A Pop Up!!!</p>
                </div>
            </div>
        );
    }
}
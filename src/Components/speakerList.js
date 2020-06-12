import React, { Component } from 'react';
import Card from './card';
import { CardDeck } from 'react-bootstrap';

export default class SpeakerList extends Component {
    state = {
        popupOpen: false,
    };
    togglePop = () => {
        this.setState({
            popupOpen: !this.state.popupOpen
        })
    };
    render() {
        const speakerListStyle = {
            listStyleType: 'none',
            margin: 'auto'
        }
        const cardDeckStyle = {
            margin: '30px 200px 30px 200px'
        }
        const titleStyle = {
            textAlign: 'Center',
            textTransform: 'uppercase'
        }

        return (
            <div id='speakerSection'>
                <h2 style={titleStyle} className='pageTitle'>Speakers</h2>
                <ul style={speakerListStyle} className='speakerList'>
                    <li style={cardDeckStyle} className='cardDeckHolder'>
                        <CardDeck>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </CardDeck>
                    </li>
                    <li style={cardDeckStyle} className='cardDeckHolder'>
                        <CardDeck>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </CardDeck>
                    </li>
                </ul>
            </div>
        );
    }
}

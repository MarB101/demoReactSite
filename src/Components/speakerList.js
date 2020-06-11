import React, { Component } from 'react';
import Card from './card';
import { CardDeck } from 'react-bootstrap';

export default class SpeakerList extends Component {
    render() {
        const speakerListStyle = {
            display: 'block',
            textAlign: 'center'
        }
        const cardDeckStyle = {
            margin: '20px',
            borderWidth: '0px'
        }
        const titleStyle = {
            textAlign: 'Center'
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

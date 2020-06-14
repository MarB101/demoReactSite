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
            padding: '0px'
        }
        const cardDeckStyle = {
            margin: '30px 250px 30px 250px'
        }
        const titleStyle = {
            textAlign: 'Center',
            textTransform: 'uppercase',
            color: '#356fcc'
        }

        return (
            <div id='speakerSection'>
                <h2 style={titleStyle} className='pageTitle'>Speakers</h2>
                <ul style={speakerListStyle} className='speakerList'>
                    <li style={cardDeckStyle} className='cardDeckHolder'>
                        <CardDeck>
                            <Card image={process.env.PUBLIC_URL + '/images/gray.jpg'}/>
                            <Card image={process.env.PUBLIC_URL + '/images/kal.jpg'}/>
                            <Card image={process.env.PUBLIC_URL + '/images/brooke.jpg'}/>
                            <Card image={process.env.PUBLIC_URL + '/images/ayo.jpg'}/>
                        </CardDeck>
                    </li>
                    <li style={cardDeckStyle} className='cardDeckHolder'>
                        <CardDeck>
                            <Card image={process.env.PUBLIC_URL + '/images/jane.jpg'}/>
                            <Card image={process.env.PUBLIC_URL + '/images/joe.jpg'}/>
                            <Card image={process.env.PUBLIC_URL + '/images/sarah.jpg'}/>
                            <Card image={process.env.PUBLIC_URL + '/images/steve.jpg'}/>
                        </CardDeck>
                    </li>
                </ul>
            </div>
        );
    }
}

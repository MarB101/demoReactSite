import React, { Component } from 'react';
import Card from './card';

export default class SpeakerList extends Component {
    render() {
        const speakerListStyle = {
            display: 'block',
            textAlign: 'center'
        }
        const cardStyle = {
            background: '#111',
            listStyleType: 'none',
            padding: '10px'
        }
        const titleStyle = {
            textAlign: 'Center'
        }
        const imageBoxStyle = {
            cursor: 'pointer'
        }

        return (
            <div id='speakerSection'>
                <h2 style={titleStyle} className='pageTitle'>Speakers</h2>
                <ul style={speakerListStyle} className='speakerList'>
                    <li style={cardStyle} className='card'>
                        <Card />
                        <image style={imageBoxStyle}></image>
                    </li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                    <li style={cardStyle} className='card'><a className='link' href='test'>Card</a></li>
                </ul>
            </div>
        );
    }
}

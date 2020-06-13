import React, { Component } from 'react';
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import { ArrowUpCircle } from 'react-bootstrap-icons';

export default class MenuBar extends Component {
    render() {
        const menuListLinkStyle = {
            color: 'white',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            padding: '10px 30px 10px 30px'
        }

        const menuButtonStyleOdd = {
            backgroundColor: '#5496ff'
        }

        const menuButtonStyleEven = {
            backgroundColor: '#103585'
        }

        return (
            <div id='menuBar'>
                <Nav style={{background: 'grey'}}variant="pills">
                    <Nav.Item style={menuButtonStyleOdd}>
                        <Nav.Link style={menuListLinkStyle} eventKey="link-0">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={menuButtonStyleEven}>
                        <Nav.Link style={menuListLinkStyle} active eventKey="link-1">Speakers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={menuButtonStyleOdd}>
                        <Nav.Link style={menuListLinkStyle} eventKey="link-2">Agenda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={menuButtonStyleEven}>
                        <Nav.Link style={menuListLinkStyle} eventKey="link-3">Why Attend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={menuButtonStyleOdd}>
                        <Nav.Link style={menuListLinkStyle} eventKey="link-4">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={menuListLinkStyle} eventKey="link-5">Entrance <ArrowUpCircle/> </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

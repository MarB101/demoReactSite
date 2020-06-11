import React, { Component } from "react";
import { Card } from 'react-bootstrap'

export default class AttendCard extends Component {
    render() {
        const cardStyle = {
            borderWidth: '0px',
            borderRadius: '0px',
            width: '18rem'
        }

        return (
            <div id='cardHolder'>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                    <Card.Body>
                        <Card.Title style={{display: 'block',color: 'blue', float: 'left'}}>Speaker Name</Card.Title>
                        <Card.Text style={{clear: 'both'}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
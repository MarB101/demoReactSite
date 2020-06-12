import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Example from './cardPopOut';

export default class AttendCard extends Component {
    render() {
        const cardStyle = {
            borderWidth: '0px',
            borderRadius: '0px',
            width: '18rem',
            listStyleType: 'none',
            margin: '10px'
        }

        return (
            <div style={{ listStyleType: 'none' , margin:'auto'}} className='cardHolder'>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                    <Card.Body>
                        <Card.Title style={{ display: 'block', color: 'blue', float: 'left' }}>Speaker Name</Card.Title>
                        <Card.Text style={{ clear: 'both' }}>
                            Job Title, Department
                            Name, Company Name
                        </Card.Text>
                        <Example/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
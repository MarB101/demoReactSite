import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import PopOut from './cardPopOut';

export default class AttendCard extends Component {
    render() {
        const cardStyle = {
            borderWidth: '0px',
            borderRadius: '0px',
            width: '300px',
            listStyleType: 'none',
            margin: '0px'
        }

        const imageStyle = {
            objectFit: 'cover', 
            height: '300px',
            borderRadius: '0px'
        }

        return (
            <div style={{ listStyleType: 'none' , margin:'auto'}} className='cardHolder'>
                <Card style={cardStyle}>
                    <Card.Img style={imageStyle} variant="top" src="https://images.unsplash.com/photo-1592011159356-3a1f7c74e784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    <Card.Body style={{backgroundColor: '#ebf5ff'}}>
                        <Card.Title style={{ display: 'block', color: '#5496ff', float: 'left' }}>Speaker Name</Card.Title>
                        <Card.Text style={{ clear: 'both'}}>
                            Job Title, Department
                            Name, Company Name
                        </Card.Text>
                        <PopOut/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
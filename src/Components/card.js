import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import PopOut from './cardPopOut';

export default class AttendCard extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
      }
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
                    <Card.Img style={imageStyle} variant="top" src={this.props.image} />
                    <Card.Body style={{backgroundColor: '#ebf5ff'}}>
                        <Card.Title style={{ display: 'block', color: '#5496ff', float: 'left' }}>Speaker Name</Card.Title>
                        <Card.Text style={{ clear: 'both'}}>
                            Job Title, Department
                            Name, Company Name
                        </Card.Text>
                        <PopOut image={this.props.image}/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class QuoteSection extends Component {
    render() {
        const quoteSectionStyle = {
            textAlign: 'center',
            backgroundColor: 'black',
            padding: '30px 500px 30px 500px'
        }
        const carouselItemStyle = {
            textAlign: 'center',
            backgroundColor: 'black',
            paddingTop: '50px ',
            paddingBottom: '100px'
        }
        return (
            <div style={quoteSectionStyle} id='QuoteSection'>
                <Carousel>
                    <Carousel.Item style={carouselItemStyle}>
                        <Carousel.Caption>
                            <p>
                            The presentations gave a fascinating insight into the implementation
                            of DevOps at high profile companies
                            </p>
                            <h3>John Hayes, London & Quadrant</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={carouselItemStyle}>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={carouselItemStyle}>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

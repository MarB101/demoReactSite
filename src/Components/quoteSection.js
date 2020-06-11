import React, { Component } from 'react';

export default class QuoteSection extends Component {
    render() {
        const quoteSectionStyle = {
            textAlign: 'center',
            paddingTop: '50px',
            paddingBottom: '50px'
        }
        return (
            <div style={quoteSectionStyle} id='QuoteSection'>
                <div className='quoter'>
                    <p className='quote'>"Quote"</p>
                    <p className='quoteSource'>"Quoter</p>
                </div>
            </div>
        );
    }
}

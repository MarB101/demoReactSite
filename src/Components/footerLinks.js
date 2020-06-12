import React, { Component } from 'react';

export default class FooterLinks extends Component {
    render() {
        const footerListStyle = {
            clear: 'both',
            paddingTop: '50px',
            paddingBottom: '50px'
        }
        const footerListColStyle = {
            float: 'left',
            width: '50px',
            paddingLeft: '100px',
            paddingRight: '100px'
        }
        const footerListLinkStyle = {
            display: 'block',
            float: 'left',
            width: '50px',
        }
        return (
            <div id='footerSection'>
                <ul style={footerListStyle} className='footerList'>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                    </li>
                </ul>
            </div>
        );
    }
}

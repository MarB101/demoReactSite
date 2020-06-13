import React, { Component } from 'react';

export default class FooterLinks extends Component {
    render() {
        const footerSectionStyle = {
            background: '#575757',
            paddingBottom: '500px',
            border: '1px solid #575757'
        }
        const footerListColStyle = {
            float: 'left',
            paddingRight: '100px',
            border: '3px solid green'

        }
        const footerListLinkStyle = {
            display: 'block',
            border: '3px solid green'
        }
        return (
            <div style={footerSectionStyle} id='footerSection'>
                <ul style={footerListColStyle} className='footerList'>
                    <li style={footerListColStyle} className='listCol'>
                        <span> Header </span>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <span> Header </span>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                        <a style={footerListLinkStyle} className='link' href='test'>Card</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <span> Header </span>
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

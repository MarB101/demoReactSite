import React, { Component } from 'react';

export default class FooterLinks extends Component {
    render() {
        const footerSectionStyle = {
            background: '#575757',
            border: '1px solid #575757'
        }
        const footerListStyle = {
            display: 'inline-block',
            margin: 'auto',
            padding: '30px',
            width: '300px'
        }
        const footerListColStyle = {
            display: 'block',
            paddingRight: '100px',
            border: '3px solid green',
            margin: 'auto'
        }
        const footerListLinkStyle = {
            display: 'block',
            border: '3px solid green'
        }
        return (
            <div style={footerSectionStyle} id='footerSection'>
                <ul style={footerListStyle} className='footerList'>
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
                <ul style={footerListStyle} className='footerList'>
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
                <ul style={footerListStyle} className='footerList'>
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

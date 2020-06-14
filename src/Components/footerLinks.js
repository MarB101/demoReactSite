import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class FooterLinks extends Component {
    render() {
        const footerSectionStyle = {
            background: '#575757',
            border: '1px solid #575757',
            padding: '10px 30px 10px 30px',
            overflow: 'hidden'
        }
        const footerListStyle = {
            padding: '10px 30px 10px 30px',
            width: '600px',
            float: 'left',
            color: 'white'
        }
        const footerListColStyle = {
            display: 'block',
            margin: 'auto',
            textAlign: 'left'
        }
        const headerStyle = {
            textAlign: 'left',
            margin: '20px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'white'
        }
        const footerListLinkStyle = {
            display: 'block',
            textAlign: 'left',
            margin: 'auto',
            color: 'white'
        }
        const socialStyle = {
            margin: '10px'
        }
        const hrStyle = {
            borderColor: 'white'
        }
        return (
            <div style={footerSectionStyle} id='footerSection'>
                <ul style={footerListStyle} className='footerList'>
                    <span style={headerStyle}> Other Company Sites </span>
                    <hr style={hrStyle} />
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Corporate</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Marketing</a>
                    </li>
                </ul>
                <ul style={footerListStyle} className='footerList'>
                    <span style={headerStyle}> Legal </span>
                    <hr style={hrStyle} />

                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Terms & Conditions</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Terms & Conditions of use</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Privacy Policy</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Cookies Policy</a>
                    </li>
                    <li style={footerListColStyle} className='listCol'>
                        <a style={footerListLinkStyle} className='link' href='test'>Accessibility</a>
                    </li>
                </ul>
                <ul style={footerListStyle} className='footerList'>
                    <span style={headerStyle}> Social </span>
                    <hr style={hrStyle} />
                    <SocialIcon style={socialStyle} url="http://facebook.com" />
                    <SocialIcon style={socialStyle} url="http://twitter.com" />
                    <SocialIcon style={socialStyle} url="http://linkedin.com" />
                    <SocialIcon style={socialStyle} url="http://youtube.com" />
                </ul>
                <ul style={footerListStyle} className='footerList'>
                    <span style={headerStyle}> Find Us </span>
                    <hr style={hrStyle} />

                    <p>Company</p>
                    <p>Building</p>
                    <p>Street</p>
                    <p>County/Postcode</p>
                </ul>
            </div >
        );
    }
}

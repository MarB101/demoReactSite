import React, { Component } from 'react';
import '../App.css'

export default class MenuBar extends Component {
    render() {
        const menuListStyle = {
            listStyleType: 'none',
            padding: '10px'
        }
        const menuListItemStyle = {
            float: 'left',
            padding: '20px',
            background: 'black'
        }
        const menuListLinkStyle = {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none'
        }
        return (
            <div id='menuBar'>
                <ul style={menuListStyle} className='menuList'>
                    <li style={menuListItemStyle} className='menuListItem'>
                        <a style={menuListLinkStyle} className='menuListLink' href='test'>Home</a>
                    </li>
                    <li style={menuListItemStyle} className='menuListItem'>
                        <a style={menuListLinkStyle} className='menuListLink is-active' href='test'>Speakers</a>
                    </li>
                    <li style={menuListItemStyle} className='menuListItem'>
                        <a style={menuListLinkStyle} className='menuListLink' href='test'>Agenda</a>
                    </li>
                    <li style={menuListItemStyle} className='menuListItem'>
                        <a style={menuListLinkStyle} className='menuListLink' href='test'>Why Attend</a>
                    </li>
                    <li style={menuListItemStyle} className='menuListItem'>
                        <a style={menuListLinkStyle} className='menuListLink' href='test'>Contact Us</a>
                    </li>
                    <li style={menuListItemStyle} className='menuListItem'>
                        <a style={menuListLinkStyle} className='menuListLink' href='test'>Entrance</a>
                    </li>
                </ul>
            </div>
        )
    }
}

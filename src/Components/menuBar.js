import React, { Component } from 'react';


class MenuBar extends Component {
    render() {
        return (
            <div id='menuBar'>
                <ul className='menuList'>
                    <li className='listCol'><a className='link' href='test'>Home</a></li>
                    <li className='listCol'><a className='link' href='test'>Speakers</a></li>
                    <li className='listCol'><a className='link' href='test'>Agenda</a></li>
                    <li className='listCol'><a className='link' href='test'>Why Attend</a></li>
                    <li className='listCol'><a className='link' href='test'>Contact Us</a></li>
                </ul>
            </div>
        )
    }
}

export default MenuBar;
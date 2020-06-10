import React, { Component } from 'react'


class MenuBar extends Component {

    render() {
        return (
            <div className='menu'>Menu Bar
                <ul className='menuList'>
                    <li><a className='link' href='test'>Home</a></li>
                    <li><a className='link' href='test'>Speakers</a></li>
                    <li><a className='link' href='test'>Agenda</a></li>
                    <li><a className='link' href='test'>Why Attend</a></li>
                    <li><a className='link' href='test'>Contact Us</a></li>
                </ul>
            </div>
        )
    }
}

export default MenuBar;
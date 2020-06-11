import React, { Component } from 'react';

export default class AccountComponent extends Component{
    render() {
        const testStyle = {
            color: 'Red',
            float: 'right',
            padding: '10px',
            margin: '10px',
            borderRadius: '2px'
        };

        return (
            <div style={testStyle} className='accountSection'>
                <button style={testStyle} className='LoginBtn' type='submit' href='https://google.com'>Login</button>
                <button style={testStyle} className='registerBtn' type='submit' >Register</button>
            </div>
        )
    }
}

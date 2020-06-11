import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class AccountComponent extends Component{
    render() {

        const accountSectionStyle = {
            float: 'right',
        }

        const LoginBtnStyle = {
            backgroundColor: 'grey',
            float: 'right',
            borderWidth: '0/5px',
            borderColor: 'black',
            padding: '10px 50px 10px 50px',
            margin: '10px',
            borderRadius: '2px',
            textTransform: 'uppercase'
        };

        const registerBtnStyle = {
            backgroundColor: 'navy',
            float: 'right',
            borderWidth: '0/5px',
            borderColor: 'black',
            padding: '10px 50px 10px 50px',
            margin: '10px',
            borderRadius: '2px',
            textTransform: 'uppercase'
        }

        return (
            <div style={accountSectionStyle} className='accountSection'>
                <Button style={LoginBtnStyle} className='LoginBtn' type='submit' href='https://google.com'>Login</Button>
                <Button style={registerBtnStyle} className='registerBtn' type='submit' >Register</Button>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { BoxArrowInRight, PersonPlusFill } from 'react-bootstrap-icons';

export default class AccountComponent extends Component{
    render() {

        const accountSectionStyle = {
            float: 'right',
            marginTop: '100px',
            marginRight: '20px'
        }

        const LoginBtnStyle = {
            backgroundColor: 'grey',
            float: 'right',
            padding: '10px 50px 10px 50px',
            borderWidth: '0px',
            margin: '10px',
            borderRadius: '0px',
            textTransform: 'uppercase'
        };

        const registerBtnStyle = {
            backgroundColor: 'navy',
            float: 'right',
            borderWidth: '0px',
            padding: '10px 50px 10px 50px',
            margin: '10px',
            borderRadius: '0px',
            textTransform: 'uppercase'
        }

        return (
            <div style={accountSectionStyle} className='accountSection'>
                <Button style={LoginBtnStyle} className='LoginBtn' type='submit' href='https://google.com'><BoxArrowInRight/> Login</Button>
                <Button style={registerBtnStyle} className='registerBtn' type='submit' ><PersonPlusFill/> Register</Button>
            </div>
        )
    }
}

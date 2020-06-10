import React, { Component } from 'react';

class AccountComponent extends Component{
    render() {
        return (
            <div className='accountSection'>
                <button className='registerBtn' type='submit' >Register</button>
                <button className='LoginBtn' href='https://google.com'>Login</button>
            </div>
        )
    }
}

export default AccountComponent;
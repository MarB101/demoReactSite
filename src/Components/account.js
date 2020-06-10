import React, { Component } from 'react'

class AccountComponent extends Component{

    render() {
        return (
            <div className='accountSection'>
                <button className='registerBtn'>Register</button>
                <button className='LoginBtn'>Login</button>
            </div>
        )
    }
}

export default AccountComponent;
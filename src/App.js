import React, { Component } from 'react';
import './App.css';
import AccountComponent from './Components/account'
import MenuBar from './Components/menuBar'
import SpeakerList from './Components/speakerList'

class App extends Component {
  render() {
    return (
      <div className="streamGoDemoPage">
        <header className="header">
          <div>Logo</div>
          <AccountComponent />
          <MenuBar />
        </header>
        <body>
          <SpeakerList />
        </body>
        <footer className='footer'>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;

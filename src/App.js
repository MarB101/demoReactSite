import React, { Component } from 'react';
import './App.css';
import AccountComponent from './Components/account';
import MenuBar from './Components/menuBar';
import SpeakerList from './Components/speakerList';

class App extends Component {
  render() {
    return (
      <div className="streamGoDemoPage">
        <header className="header">
          <div className='logo'>Logo</div>
          <AccountComponent />
          <MenuBar />
        </header>
        <body>
          <h2 className='pageTitle'>Speakers</h2>
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

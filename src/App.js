import React, { Component } from 'react';
import AccountComponent from './Components/account';
import MenuBar from './Components/menuBar';
import SpeakerList from './Components/speakerList';
import FooterLinks from './Components/footerLinks';
import QuoteSection from './Components/quoteSection';
import './App.css';

class App extends Component {
  render() {
    const pageStyles = {
      fontFamily: 'Arial'
    }
    const footerStyle = {
      background: '#575757'
    }
    const headerTextStyle = {
      padding: '0px 0px 20px 30px',
      marginTop: '100px',
      color: '#5496ff',
      fontWeight: 'bold',
      fontSize: '75px'
    }
    const logoStyle = {
      margin: '40px 0px 0px 40px',
      width: '170px',
      display: 'block',
      backgroundColor: 'red'
    }
    const containerStyle = {
      padding: '30px',
      marginTop: '30px',
      clear: 'both'
    }

    return (
      <div style={pageStyles} id="streamGoDemoPage">
        <div id="header">
          <div style={logoStyle} className='logo'>Logo</div>
          <AccountComponent />
          <h1 style={headerTextStyle} className='headerText'>This Conference <span style={{color: '#356fcc'}}>2020</span></h1>
          <MenuBar />
        </div>
        <body style={containerStyle} id='container'>
          <SpeakerList />
        </body>
          <QuoteSection />
        <div style={footerStyle} id='footer'>
          <FooterLinks />
        </div>
      </div>
    );
  }
}

export default App;

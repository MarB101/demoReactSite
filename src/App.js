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
      backgroundImage: 'url(https://static.wixstatic.com/media/fda52a6a7f4140259e12beb9796f91dc.jpg/v1/fill/w_4608,h_1963,al_c,q_90/Faded%20Conference%20Table.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    const copyrightStyle = {
      backgroundColor: '#404142',
      overflow: 'hidden'
    }

    const copyrightTextStyle = {
      color: 'white',
      float: 'right',
      margin: '0px',
      padding: '10px'
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
        <div id='footer'>
          <FooterLinks />
        </div>
        <div style={copyrightStyle} id='copyright'>
          <h3 style={copyrightTextStyle}>Copyright</h3>
        </div>
      </div>
    );
  }
}

export default App;

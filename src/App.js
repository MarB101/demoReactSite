import React, { Component } from 'react';
import AccountComponent from './Components/account';
import MenuBar from './Components/menuBar';
import SpeakerList from './Components/speakerList';
import FooterLinks from './Components/footerLinks';
import QuoteSection from './Components/quoteSection';
import Button from 'react-bootstrap/Button';
import { ChevronDown } from 'react-bootstrap-icons';

class App extends Component {
  render() {
    const pageStyles = {
      fontFamily: 'Arial'
    }
    const headerTextStyle = {
      padding: '0px 0px 20px 30px',
      color: '#5496ff',
      fontWeight: 'bold',
      fontSize: '75px'
    }
    const logoStyle = {
      padding: '30px 0px 0px 30px',
      width: '130px',
      height: '130px',
    }
    const containerStyle = {
      padding: '60px',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})`,
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

    const registerButtonStyle = {
      backgroundColor: 'orange',
      border: '0px',
      borderRadius: '0px',
      display: 'block',
      margin: 'auto',
      textTransform: 'uppercase',
      padding: '10px 30px 10px 30px',
      fontWeight: 'bold'
    }

    const chevronStyle = {
      display: 'block',
      margin: 'auto',
      marginBottom: '30px'
    }

    return (
      <div style={pageStyles} id="streamGoDemoPage">
        <div id="header">
          <img style={logoStyle} className='logo' src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt='logo'></img>
          <AccountComponent />
          <h1 style={headerTextStyle} className='headerText'>This Conference <span style={{color: '#356fcc'}}>2020</span></h1>
          <MenuBar />
        </div>
        <body style={containerStyle} id='container'>
          <SpeakerList />
          <ChevronDown style={chevronStyle}/>
          <Button style={registerButtonStyle}>Register Now</Button>
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

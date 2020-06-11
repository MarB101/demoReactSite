import React, { Component } from 'react';
import AccountComponent from './Components/account';
import MenuBar from './Components/menuBar';
import SpeakerList from './Components/speakerList';
import FooterLinks from './Components/footerLinks';
import QuoteSection from './Components/quoteSection';
import Popout from './Components/popout';
import './App.css';


class App extends Component {
  state = {
    popupOpen: false
  };

  togglePop = () => {
    this.setState({
      popupOpen: !this.state.popupOpen
    })
  };
  render() {
    const headerStyle = {
      background: '#dddddd',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white'
    }
    const footerStyle = {
      background: '#575757',
      listStyleType: 'none',
    }
    const headerTextStyle = {
      padding: '10px'
    }
    const logoStyle = {
      padding: '30px'
    }
    const containerStyle = {
      padding: '30px',
      marginTop: '30px',
      clear: 'both'
    }

    return (
      <div id="streamGoDemoPage">
        <div style={headerStyle} id="header">
          <div style={logoStyle} className='logo'>Logo</div>
          <AccountComponent />
          <h1 style={headerTextStyle} className='headerText'>This Conference 2020</h1>
          <MenuBar />
        </div>
        <body style={containerStyle} id='container'>
        {this.state.popupOpen ? <Popout toggle={this.togglePop} /> : null}
        <button onClick={this.togglePop}>TEST</button>

          <SpeakerList />
          <QuoteSection />
        </body>
        <div style={footerStyle} id='footer'>
          <FooterLinks />
        </div>
      </div>
    );
  }
}

export default App;

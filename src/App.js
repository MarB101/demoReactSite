import React from 'react';
import './App.css';
import AccountComponent from './Components/account'
import MenuBar from './Components/menuBar'

function App() {
  return (
    <div className="streamGoDemoPage">
      <header className="header">
        <div>Logo</div>
        <AccountComponent/>
        <MenuBar/>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Options from './options.jsx';
import Generated from './generated.jsx';
// import logo from '../logo.png'

const App = () => {

  //main container for the entire page
  return (
    <div className="container">
      <div>
        <a href="/">Favorites</a>
      </div>
      <div className="navBar">
        {/* <img src= { require('../logo.png')} /> */}
        <a href="/"><img src="https://i.ibb.co/ZJVR822/logo.png" alt="logo" border="0" className='logo'/></a>
        </div>
      <div className="underNav">
        <div className="leftColumn">
          {/* <button>Favorites</button> */}
        </div>
        <div className="contentContainer">
          <Options />
          <Generated />
        </div>
        <div className="rightColumn"></div>
      </div>
    </div>
  );
};

export default App;

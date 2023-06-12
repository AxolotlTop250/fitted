// Dependencies
import React, { useState } from 'react';
import Options from './options.jsx';
import Generated from './generated.jsx';
// import logo from '../logo.png'

const App = () => {

  //main container for the entire page
  // we have a star image which has an anchor link to the base domain at the moment, but will be refactored to '/favorites'
  // our logo is just a text logo made as a png, and it will serve as the main nav component that takes you back to the homepage
  return (
    <div className="container">

      <div className="navBar">
      <a href="/"><img src="https://i.ibb.co/hF8mRSN/Favorites-Star.png" alt="favorites"  className="favorites"></img></a>
        {/* <img src= { require('../logo.png')} /> */}
        <a href="/"><img src="https://i.ibb.co/ZJVR822/logo.png" alt="logo" border="0" className="logo"/></a>
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
    </>
  );
}


export default App;

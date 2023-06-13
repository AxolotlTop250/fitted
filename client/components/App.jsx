// Dependencies
import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Component imports
import Home from './Home2.jsx'
import Favorites from './favorites.jsx';
// npm react
const App = () => {


  //main container for the entire page
  // we have a star image which has an anchor link to the base domain at the moment, but will be refactored to '/favorites'
  // our logo is just a text logo made as a png, and it will serve as the main nav component that takes you back to the homepage

  return (
    <>
      <div className="container">
        <div className="navBar">
          <Link to="/favorites"><img src="https://i.ibb.co/hF8mRSN/Favorites-Star.png" alt="favorites"  className="favorites" /></Link>
          <Link className="Home" to="/"><img src="https://i.ibb.co/ZJVR822/logo.png" alt="logo" border="0" className="logo"/></Link>
        </div>
        <Routes>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/" element={<Home /> }/>
        </Routes>
      </div>
    </>
  );
};



export default App;

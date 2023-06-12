// Dependencies
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Component imports
import Home from './Home.jsx'
import Favorites from './favorites.jsx';
// import logo from '../logo.png'

const App = () => {

  //main container for the entire page
  return (
    <>
      <div className="container">
        <div className="navBar">
          <Link className="Favorites" to="/favorites"><img src="https://i.ibb.co/hF8mRSN/Favorites-Star.png" alt="favorites"  className="favorites" /></Link>
          <Link className="Home" to="/"><img src="https://i.ibb.co/ZJVR822/logo.png" alt="logo" border="0" className="logo"/></Link> 
        </div>
        <Routes>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/" element={<Home /> }/>
        </Routes>
      </div>
    </>
  );
}


export default App;

import React, { useState } from 'react';

const App = () => {
  const handleClick = (e) => {  
    fetch('/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: {prompt: prompt}
    })
    .then(response => response.json())
    .then(response => {
      const uri = response.data;
    })
};
  //main container for the entire page
  return (
    <div className="container">
      <div className="navBar">Hello</div>
      <div className="underNav">
        <div className="leftColumn"> </div>
          {/* <div className="testBox"></div>
        </div> */}
        <div className="contentContainer">

          <div className="optionsComponent"></div>
          <div className="generatedComponent"></div>
        </div>
        <div className="rightColumn"></div>
      </div>
    </div>
  );
};

export default App;

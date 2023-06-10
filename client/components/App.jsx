import React, { useState } from 'react';

const App = () => {
  const handleClick = (e) => {  
    fetch('/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({prompt: 'Male wearing mad drip'})
    })
    .then(response => response.json())
    .then(response => {
      const uri = response.data;
      console.log(uri)
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

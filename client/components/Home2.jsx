import React from 'react';
import Options from './options.jsx';
import Generated from './generated.jsx';


const Home = () => {
    return (
        <div className="underNav">
            <div className="leftColumn"></div>
            <div className="contentContainer">
            <Options />
            <Generated />
            </div>
            <div className="rightColumn"></div>
        </div>
    )
}

export default Home;
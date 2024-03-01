import React from 'react';
import '../Styles/JumboTron.css';
import JumboTronBackground from '../Assets/JumboTron.jpg';

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="image-container">
          <img src={JumboTronBackground} alt='JumboTron' />
        </div>
        <div className="content">
          <h1>Software fueling digital marketing</h1>
          <button className="btn-primary">Learn more</button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import './Styles/SubscribeNews.css';
import SubscribeBar from './Components/SubscribeBar';
const SubscribeNews = () => {
  return (
    <div className="subscribe-news-container">
           <div className="subscribe-news-content">
            <h2>Subscribe to our newsletter</h2>
    
            <h7>Follow our story and get the latest promotonial news about our products and events.</h7>
            </div>
            <div className="subscribe-bar">
                <SubscribeBar />
                </div>
            </div>
  )
}

export default SubscribeNews;
import React from 'react';
import NewsCard from './LatestNewsCards';
import './Styles/LatestNewsCards.css'; 

const LatestNews = () => {
  return (
    <div className="latest-news-container">

      <div className="latest-news-section">
        <h2>Latest News</h2>
        <div className="news-cards-container">
          <NewsCard
            title="News Title 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            date="2024-02-25"
          />
          <NewsCard
            title="News Title 2"
            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            date="2024-02-24"
          />
          <NewsCard
            title="News Title 3"
            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            date="2024-02-23"
          />
        </div>
      </div>
    </div>
  );
}

export default LatestNews;

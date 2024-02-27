import React from 'react';
import './Styles/LatestNewsCards.css';

const NewsCard = ({date, content }) => {
  return (
    <div className="latest-news-card">
     <small>{date}</small>
      <p>{content}</p>
      
    </div>
  );
}

export default NewsCard;

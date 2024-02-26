import React from 'react';
import './Styles/LatestNewsCards.css';

const NewsCard = ({ title, content, date }) => {
  return (
    <div className="latest-news-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{date}</small>
    </div>
  );
}

export default NewsCard;

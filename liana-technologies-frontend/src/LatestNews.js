import React from 'react';
import NewsCard from './LatestNewsCards';
import './Styles/LatestNewsCards.css'; 

const LatestNews = () => {
  return (
    <div className="latest-news-container">

      <section className="latest-news-section">
        <h2>Latest News</h2>
        <div className="news-cards-container">
          <NewsCard
          date="20.07.2016"
            content="Liana Technologies and EncodeSolutions merge to create unique mobile solutions"


          />
          <NewsCard
            date="28.01.2016"
            content="From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology"
/>
          <NewsCard
            date="02.07.2015"
            content="Liana Technologies Hong Kong launched a series of digital marketing events in June"

          />
        </div>
      </section>
    </div>
  );
}

export default LatestNews;

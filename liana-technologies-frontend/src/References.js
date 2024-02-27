import React from 'react';
import Reference from './ReferenceCard';
import './Styles/References.css'; 
import ikea from './Assets/Ikea-logo.png'
import bosch from './Assets/Robert-Bosch-logo.jpg';
import thebodyshop from './Assets/The-body-shop-logo.png';
import laplandhotels from './Assets/Lapland-hotels-logo.png';
const References = () => {
  return (
    
    <section className="reference-container">
      
      <div className="reference-section">
      <h2>References</h2>
        <div className="reference-card-container">
          <Reference
          logo={bosch}
          
          company="Robert Bosch"
            content="Bosch is a multinational engineering and electronics company."


          />
          <Reference
            logo={thebodyshop}
            company="The Body Shop"
            content="From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology"
/>
          <Reference
            logo={laplandhotels}
            company="Lapland Hotels"
            content="Liana Technologies Hong Kong launched a series of digital marketing events in June"

          />
            <Reference
            logo={ikea}
            company="IKEA"
            content="Liana Technologies Hong Kong launched a series of digital marketing events in June"

          />
        </div>
      </div>
      <div className="section-divider">
      </div>
    </section>
  );
}

export default References;

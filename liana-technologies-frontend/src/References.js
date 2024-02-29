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
            content="The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries."
/>
          <Reference
            logo={laplandhotels}
            company="Lapland Hotels"
            content="Lapland Hotels is the largest and the most diverse hotel chain in Lapland."

          />
            <Reference
            logo={ikea}
            company="IKEA"
            content="IKEA is a multinational furniture store."

          />
        </div>
      </div>
      <div className="section-divider">
      </div>
    </section>
  );
}

export default References;

import React from 'react';
import Reference from './ReferenceCard';
import './Styles/References.css'; 
import ikea from './Assets/Ikea-logo.png'

const References = () => {
  return (
    
    <section className="reference-container">
      
      <div className="reference-section">
      <h2>References</h2>
        <div className="reference-card-container">
          <Reference
          logo={ikea}
          
          company="Robert Bosch"
            content="Bosch is a multinational engineering and electronics company."


          />
          <Reference
            logo={ikea}
            company="The Body Shop"
            content="From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology"
/>
          <Reference
            logo={ikea}
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

import React from 'react';
import './Styles/References.css';

const ReferenceCard = ({ logo, company, content }) => {
  return (
    <div className="reference-card">
    <img src={logo} alt='reference-company-logo'/>
     <h6>{company}</h6>
      <p>{content}</p>
      
    </div>
  );
}

export default ReferenceCard;

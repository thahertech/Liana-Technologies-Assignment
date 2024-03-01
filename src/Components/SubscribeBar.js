// SubscribeBar.js
import React, { useState } from 'react';
import '../Styles/SubscribeBar.css';

const SubscribeBar = () => {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = () => {
    //Confirmed subscription for front-end
    setSubscribed(true);
  };

  return (
    <div className="subscribe-box">
      {!subscribed ? (
        <div>
          <input
            type="email"
            placeholder="Your email address"
            onChange={handleChange}
            value={emailInput}
          />
          <button onClick={handleSubmit}>Subscribe</button>
        </div>
      ) : (
        <div>
          <p>Thank you for subscribing to our news letter!</p>
        </div>
      )}
    </div>
  );
};

export default SubscribeBar;

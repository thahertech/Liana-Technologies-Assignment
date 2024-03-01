// NewsletterSubscription.js
import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    
    setSubscribed(true);
  };

  return (
    <div>
      {!subscribed ? (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      ) : (
        <div>
          <p>Thank you for subscribing!</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;

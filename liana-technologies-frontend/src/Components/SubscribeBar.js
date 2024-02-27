import React, { useState } from 'react';
import '../Styles/SubscribeBar.css';

const SubscribeBar = ({ items }) => {
  const [emailInput, setEmailInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    setEmailInput(e.target.value);
    if (e.target.value === "") {
      setFilteredItems([]);
    }
  };

  const handleSubmit = () => {
    const filtered = items.filter((item) =>
      item.name.includes(emailInput)
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="subscribe-box">
      <input
        type="email"
        placeholder="Your email address"
        onChange={handleChange}
        value={emailInput}
      />
      <button onClick={handleSubmit}>Subscribe</button>

      {emailInput.length > 0 && filteredItems.length === 0 ? (
        <p>Failed to submit.</p>
      ) : (
        filteredItems.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default SubscribeBar;

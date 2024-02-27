import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setFilteredItems([]);
    }
  };

  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={handleSearch}>Search</button>

      {searchInput.length > 0 && filteredItems.length === 0 ? (
        <p>No matching items found.</p>
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

export default SearchBar;

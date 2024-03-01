import React, { useState } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    //update the state for front-end
    setSearchInput("");
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

      {searchInput.length > 0 ? (
        <p>Not found</p>
      ) : null}
    </div>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br /> <br />
      <button onClick={onSearch}>Search </button>
    </div>
  );
};

export default SearchBar;

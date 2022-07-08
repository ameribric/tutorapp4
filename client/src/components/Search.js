
import React from "react";

function Search({ searchTerm, onSearchChange }) {
    
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Tutors:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a tutor's name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
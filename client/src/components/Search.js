import React from "react";
import './Search.css';

function Search({ searchTerm, setSearchTerm, tutors }) {
    console.log(tutors)
    console.log(searchTerm)
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Tutors:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a tutor's name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />

    </div>
  );
}

export default Search;
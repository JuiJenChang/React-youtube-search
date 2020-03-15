import React, { useState } from "react";

function SearchBar({ fetchVideo, term, handleChange }) {
  
  const handleFormSubmit = e => {
    e.preventDefaul();
    fetchVideo(term);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

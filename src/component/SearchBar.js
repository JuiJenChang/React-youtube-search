import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ termSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = e => {
    e.preventDefaul();
    termSubmit(term);
  };
  return (
    <div className="searchBar">
      <h1>Video Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="search"
        />
      </form>
    </div>
  );
}

export default SearchBar;

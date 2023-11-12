// SearchBar.js

import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Digite sua pesquisa..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
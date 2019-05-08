import React from 'react';

const Search = ({ searchTerm, onTextChange, onSubmit, children }) => 

  <form onSubmit={onSubmit}>
    <input 
      type="text" 
      value={searchTerm}
      onChange={onTextChange} 
    />
    <button type="submit">
      {children}
    </button>
  </form>

export default Search;
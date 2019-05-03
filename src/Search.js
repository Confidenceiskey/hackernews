import React from 'react';

const Search = ({ searchTerm, onTextChange, children }) => 

  <form>
    {`${children} `}<input 
      type="text" 
      value={searchTerm}
      onChange={onTextChange} 
    />
  </form>

export default Search;
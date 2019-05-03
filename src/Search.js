import React from 'react';

const Search = ({ searchTerm, onTextChange, children }) => {

  return (
    <div>
      <form>
        {`${children} `}<input 
          type="text" 
          value={searchTerm}
          onChange={onTextChange} 
        />
      </form>
    </div>
  );
}

export default Search;
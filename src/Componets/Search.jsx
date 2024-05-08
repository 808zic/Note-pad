import React, { useState } from 'react';

const SearchComponent = ({ notes, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <input
        type="text"
        placeholder="Search notes"
        style={{ backgroundColor: 'lightyellow', padding: '5px', margin: '5px', borderRadius: '5px' }}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;

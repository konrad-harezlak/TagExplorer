import React from 'react';

const TagsCountSelector = ({ pageSize, onPageSizeChange }) => {
  const handlePageSizeChange = (e) => {
    onPageSizeChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="pageSize">Liczba elementów na stronie: </label>
      <input 
        type="number" 
        id="pageSize" 
        value={pageSize} 
        onChange={handlePageSizeChange} 
      />
    </div>
  );
};

export default TagsCountSelector;

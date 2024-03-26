// SortSelector.js
import React from 'react';

const SortSelector = ({ sortField, sortOrder, onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortField">Pole sortowania: </label>
      <select id="sortField" value={sortField} onChange={handleSortChange}>
        {/* Opcje sortowania */}
      </select>
      <label htmlFor="sortOrder">Kierunek sortowania: </label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
        {/* Opcje kierunku sortowania */}
      </select>
    </div>
  );
};

export default SortSelector;

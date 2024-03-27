import React from "react";
import { useTags } from "../TagsContext";
import './sortSelector.css'; // Import CSS

const SortSelector = () => {
  const { sortField, setSortField, sortOrder, setSortOrder } = useTags();

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    if (name === "sortOrder") {
      setSortOrder(value);
    } else if (name === "sortField") {
      setSortField(value);
    }
  };

  return (
    <div className="sort-container">
      <label htmlFor="sortField">Pole sortowania: </label>
      <select
        id="sortField"
        name="sortField"
        value={sortField}
        onChange={handleSortChange}
      >
        <option value="popular">popular</option>
        <option value="name">name</option>
        <option value="activity">activity</option>
      </select>
      <label htmlFor="sortOrder">Kierunek sortowania: </label>
      <select
        id="sortOrder"
        name="sortOrder"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </div>
  );
};

export default SortSelector;

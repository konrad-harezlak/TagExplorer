// SortSelector.js
import React, { useState, useEffect } from "react";
import { useTags } from "../TagsContext";

const SortSelector = () => {
  const { fetchTags } = useTags();
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortField, setSortField] = useState("popular");

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    if (name === "sortOrder") {
      console.log(name + " sort order" + value);
      setSortOrder(value);
    } else if (name === "sortField") {
      console.log(name + " sort field" + value);
      setSortField(value);
    }
  };
  useEffect(() => {
    fetchTags(sortOrder, sortField);
  }, [sortOrder, sortField]);
  return (
    <div>
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

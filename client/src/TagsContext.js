import React, { createContext, useContext, useState, useEffect } from "react";

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortField, setSortField] = useState("popular");
  const [pageSize, setPageSize] = useState(10); 

  const fetchTags = async (order, sort, pageSize) => {
    try {
      const response = await fetch(
        `http://localhost:4000/fetchTags?pageSize=${pageSize}&order=${order}&sort=${sort}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data)
      setTags(data.items);
    } catch (error) {
      console.error("Error occurred while fetching tags: ", error);
    }
  };

  useEffect(() => {
    fetchTags(sortOrder, sortField, pageSize);
  }, [sortOrder, sortField, pageSize]);
   const contextValue = {
    tags,
    sortOrder,
    sortField,
    pageSize,
    setSortOrder,
    setSortField,
    setPageSize,
  }; 
  return (
    <TagsContext.Provider value={contextValue}>{children}</TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};

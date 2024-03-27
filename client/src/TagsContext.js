import React, { createContext, useContext, useState, useEffect } from "react";

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  const fetchTags = async (order, sort) => {
    try {
      const response = await fetch(
        
        `http://localhost:4000/fetchTags?order=${order}&sort=${sort}`,
        {
          method: "GET",
        }
      );
      console.log(order,sort)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTags(data.items);
    } catch (error) {
      console.error("Error occurred while fetching tags: ", error);
    }
  };

  useEffect(() => {
    const defaultOrder = "desc";
    const defaultSort = "popular";
    fetchTags(defaultOrder, defaultSort);
  }, []);

  const contextValue = { tags, fetchTags };

  return (
    <TagsContext.Provider value={contextValue}>
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};

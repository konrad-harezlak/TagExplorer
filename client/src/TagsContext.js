import React, { createContext, useContext, useState, useEffect } from "react";

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async (order, sort) => {
      await fetch(`http://localhost:4000/fetchTags?order=${order}&sort=${sort}`,{method: 'GET'})
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setTags(data.items);
        })
        .catch((error) => {
          console.error("Error occured while fetching tags: ", error);
        });
    };
    const defaultOrder = "desc";
    const defaultSort = "popular";

    fetchTags(defaultOrder, defaultSort);
  }, []);

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
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

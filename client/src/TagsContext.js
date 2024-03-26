import React, { createContext, useContext, useState, useEffect } from 'react';

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async (order, sort) => {
      try {
        const response = await fetch(`https://api.stackexchange.com/docs/tags#order=${order}&sort=${sort}&filter=default&site=stackoverflow`);
        const data = await response.json();
        console.log(data);
        setTags(data.tags);
      } catch (error) {
        console.error('Błąd podczas pobierania tagów:', error);
      }
    };
    const defaultOrder = 'desc';
    const defaultSort = 'popular';

    fetchTags(defaultOrder,defaultSort);
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
    throw new Error('useTags must be used within a TagsProvider');
  }
  return context;
};

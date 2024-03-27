import React from "react";
import { useTags } from "./TagsContext";
import Tag from "./components/Tag";
import TagsCountSelector from "./components/TagsCountSelector";
import SortSelector from "./components/SortSelector";
import './tagExplorer.css'

const TagExplorer = () => {
  const { tags, isLoading, error } = useTags();

  return (
    <div className="main-container">
      <div className="tags-container">
        <TagsCountSelector />
        <SortSelector />
        {!isLoading ? (
          tags.map((tag) => {
            return <Tag name={tag.name} key={tag.name} postCount={tag.count} />;
          })
        ) : (
          <div className="loading-container"> Loading...</div>
        )}
        {error ? <div className="loading-container"> Error occured while fetching tasks</div>:"" }
      </div>
    </div>
  );
};
export default TagExplorer;

import React from "react";
import { useTags } from "./TagsContext";
import Tag from "./components/Tag";
import TagsCountSelector from "./components/TagsCountSelector";
import SortSelector from "./components/SortSelector";

const TagExplorer = () => {
  const { tags } = useTags();
  return (
    <div className="mainContainer">
      <div className="tagsContainer">
        <TagsCountSelector />
        <SortSelector />
        {tags.map((tag) => {
          return <Tag name={tag.name} key={tag.name} postCount={tag.count} />;
        })}
      </div>
    </div>
  );
};
export default TagExplorer;

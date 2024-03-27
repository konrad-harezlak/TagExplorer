import React from 'react';
import { TagsProvider } from '../TagsContext';
import TagsCountSelector from './TagsCountSelector';


const TagsCountSelectorStories = {
  title: 'TagsCountSelector',
  component: TagsCountSelector,
  decorators: [
    (Story) => (
      <TagsProvider>
        <Story />
      </TagsProvider>
    ),
  ],
};

export default TagsCountSelectorStories;

export const Default = () => <TagsCountSelector />;

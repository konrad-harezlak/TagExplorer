import React from 'react';
import SortSelector from './SortSelector';
import { TagsProvider } from '../TagsContext';

const SortSelectorStories = {
  title: 'SortSelector',
  component: SortSelector,
};

export const Default = () => (
  <TagsProvider>
    <SortSelector />
  </TagsProvider>
);

export default SortSelectorStories;

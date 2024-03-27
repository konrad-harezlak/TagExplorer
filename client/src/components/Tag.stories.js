import React from 'react';
import Tag from './Tag';

const TagStories = {
  title: 'Tag',
  component: Tag,
};

export const Default = () => (
  <Tag name="React" postCount={100} />
);

export default TagStories;

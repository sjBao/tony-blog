import * as React from 'react';

import { BlogPostListItem, BlogPageListItemDataModel } from './BlogPostListItem';

export interface BlogPostListDataModel {
  edges: Array<{ node: BlogPageListItemDataModel; }>;
}

export interface BlogPostListProps extends BlogPostListDataModel { }

export const BlogPostList: React.FunctionComponent<BlogPostListProps> = ({ edges }) => {

  return (
    <>
      {
        edges.map(({ node }) => (
          <BlogPostListItem {...node} key={node.id} />
        ))
      }
    </>
  );
};
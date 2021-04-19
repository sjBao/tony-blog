import * as React from 'react';

interface BlogPageFields {
  slug: string;
}

interface BlogPageFrontmatter {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
}

export interface BlogPageListItemDataModel {
  id: string;
  excerpt: string;
  fields: BlogPageFields;
  frontmatter: BlogPageFrontmatter;
}

export interface BlogPostListItemProps extends BlogPageListItemDataModel { }

export const BlogPostListItem: React.FunctionComponent<BlogPostListItemProps> = (props) => {
  return (
    <div className="blog-post-item">
      <h2>{props.frontmatter.title}</h2>
      <h4>{props.frontmatter.date}</h4>
      <p>{props.excerpt}</p>
    </div>
  );
};


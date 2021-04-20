import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
    <BlogPostItemContainer>
      <BlogPostLink to={props.fields.slug}>
        {props.frontmatter.title}
      </BlogPostLink>
      <br />
      {
        <div>
          <DateTag>{props.frontmatter.date}</DateTag>{
            props.frontmatter.tags && props.frontmatter.tags?.map(tag => <TagLink key={tag} to={`/blog?${tag}`}>{tag}</TagLink>)
          }
        </div>
      }
      <BlogPostExcerpt>
        {props.excerpt}
      </BlogPostExcerpt>
    </BlogPostItemContainer>
  );
};

const BlogPostItemContainer = styled.div`
  padding-bottom: 2rem;
`;

const BlogPostLink = styled(Link)`
  color: rgba(75, 114, 91, 1);
  font-family: futura;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  padding-bottom: 0.67rem;
  text-decoration: none;

  &:hover {
    color: rgb(45, 74, 61)
  }
`;

const BlogPostExcerpt = styled.p`
  margin: 1rem 0;
`;

const DateTag = styled.time`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: bold;

  &:after {
    content: ' • ';
  }

  &:last-child {
    &:after {
      content: ' ';
    }
  }
`;

const TagLink = styled(Link)`
  color: #444;
  font-size: 0.8rem;
  text-decoration: none;

  &:after {
    content: ', ';
  }

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;

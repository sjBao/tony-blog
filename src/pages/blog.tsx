import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import { BlogPostList, BlogPostListDataModel } from '../components/BlogPostList/BlogPostList';

export interface BlogPageProps {
  data: {
    allMarkdownRemark: BlogPostListDataModel;
  };
}

const BlogPage: React.FunctionComponent<BlogPageProps> = ({ data }) => {
  return (
    <Layout>
      <h1>My Thoughts, Learnings, Etc</h1>
      <h4>Posts: {data.allMarkdownRemark.edges.length}</h4>
      <BlogPostList edges={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        headings {
          id
        }
        frontmatter {
          date
          description
          tags
          title
        }
      }
    }
  }
}
`;

export default BlogPage;
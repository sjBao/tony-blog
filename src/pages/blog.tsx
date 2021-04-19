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
  // console.log(data);
  return (
    <Layout>
      <h1>Blog</h1>
      <h4>Posts: {data.allMarkdownRemark.edges.length}</h4>
      <BlogPostList edges={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export const query = graphql`
{
  allMarkdownRemark {
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
          title
          description
        }
      }
    }
  }
}
`;

export default BlogPage;
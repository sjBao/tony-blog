import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

interface BlogPostProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogPost: React.FunctionComponent<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
  console.log(data);

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );

};

export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;


export default BlogPost;
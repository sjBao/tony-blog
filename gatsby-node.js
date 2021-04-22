const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const BookNoteTemplate = path.resolve(`./src/templates/book-note.tsx`);
const BlogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.category === "book-note") {
        createPage({
          path: node.fields.slug,
          component: BookNoteTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      } else {
        createPage({
          path: node.fields.slug,
          component: BlogPostTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      }
    });
  });
};
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { TagList } from '../components/TagList/TagList';
import Layout from '../components/Layout/layout';


interface BookNoteProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        amazon_link: string;
        book_image: string;
        date_read: string;
        description: string;
        tags: string[];
        title: string;
      };
    };
  };
}

const BookNote: React.FunctionComponent<BookNoteProps> = ({ data }) => {
  const post = data.markdownRemark;
  const { amazon_link, book_image, date_read, description, tags, title } = post.frontmatter;

  return (
    <Layout>
      <div>
        <BookNoteHeading>
          <BookFigure>
            <a href={amazon_link}> <img src={book_image} alt={`Amazon Affiliate link to ${amazon_link}`} /></a>
          </BookFigure>
          <h1>{title}</h1>

          {
            tags &&
            <MetaInfo className="tags">
              Tags: <TagList tags={tags} />
            </MetaInfo>
          }
          {
            date_read &&
            <MetaInfo>
              Date Read: <time dateTime="MM, YYYY">{date_read}</time>
            </MetaInfo>
          }

          <Description>{description}</Description>
        </BookNoteHeading>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );

};

const BookFigure = styled.figure`
  & img {
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0,0,0, 0.5);
    float: left;
    margin-bottom: 0rem;
    margin-right: 1rem;
  }
`;

const BookNoteHeading = styled.div`
  margin-bottom: 3.5rem;

  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const Description = styled.p`
  padding-top: 1rem;

  &:nth-child(3) {
    padding-top: 0;
  }
`;

const MetaInfo = styled.div`
  color: #444;
  font-size: 0.8rem;

  &::before {
    content: ' • ';
  }
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        amazon_link
        book_image
        date_read
        description
        tags
        title
      }
    }
  }
`;

export default BookNote;
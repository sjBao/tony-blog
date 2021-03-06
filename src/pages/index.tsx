import * as React from "react";
import { graphql } from 'gatsby';
import styled from 'styled-components';


import Layout from "../components/Layout/layout";
import { FlexContainer } from '../components/FlexContainer/flex-container';

interface IndexPageProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: {
          images: IndexPageImageModel;
        };
      };
    };
  };
}
interface IndexPageImageModel {
  fallback: {
    sizes: string;
    src: string;
    srcSet: string;
  };
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {

  return (
    <Layout>
      <Heading className="heading">
        <FlexContainer justify="flex-start">
          <ImageContainer>
            <Image src={data.file.childImageSharp.gatsbyImageData.images.fallback.src} alt="maji" />
          </ImageContainer>

          <FlexContainer direction="column" align="flex-start">
            <Highlight>Hi, I'm Supui,</Highlight> <SubHighlight>but you can call me Tony</SubHighlight>
          </FlexContainer>
        </FlexContainer>
      </Heading>

      <Bio>
        I am a software engineer based in New York who currently works at <a href="https://www.gemini.com/about" target="_blank">Gemini.</a>
        &nbsp;In the past, I've been a developer at companies such as <a href="https://www.sephora.sg/" target="_blank">Sephora</a> and <a href="https://www.inrhythm.com/" target="_blank">InRhythm</a>.
        <br /><br />
        When I am not coding, there is a good chance you'll catch me playing basketball, or if the weather permits, hiking with <a href="https://www.instagram.com/kona.maji/" target="blank">my dogs</a>.
      </Bio>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "maji.jpg"}) {
      childImageSharp {
        gatsbyImageData(formats: PNG)
      }
    }
  }
`;

const Heading = styled.div`
  margin-bottom: 0.5rem;
`;

const Highlight = styled.div`
  font-size: 2rem;
  line-height: 1;
`;
const SubHighlight = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  margin-top: 5px;
  max-width: 222px;
`;

const Bio = styled.div`
  text-indent: 170px;

  a {
    color: hsl(180, 100%, 20%);
    text-decoration: none;

    &:hover {
        color: hsl(180, 19%, 68%);
    }
  }
`;

const ImageContainer = styled.div`
  border-radius: 50px;
  border: 6px double white;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, .3);
  height: 150px;
  margin-right: 1rem;
  min-width: 120px;
  overflow: hidden;
  width: 150px;
`;

const Image = styled.img`
  width: 100%;
  margin: 0;
  max-width: none;
  min-width: 120px;
`;

export default IndexPage;

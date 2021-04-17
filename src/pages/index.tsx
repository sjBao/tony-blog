import * as React from "react";
import { graphql } from 'gatsby';
import styled from 'styled-components';


import Layout from "../components/Layout/layout";
import { FlexContainer } from '../components/FlexContainer/flex-container';

interface IndexPageProps {
  data: {
    allFile: {
      edges: IndexPageImageModel[];
    };
  };
}
interface IndexPageImageModel {
  node: {
    id: string;
    publicURL: string;
  };
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <Heading className="heading">
        <FlexContainer justify="flex-start">
          <ImageContainer>
            <Image src={data.allFile.edges[0].node.publicURL} alt="" />
          </ImageContainer>

          <FlexContainer direction="column" align="flex-start">
            <Highlight>Hi, I'm Supui,</Highlight> <SubHighlight>but you can call me Tony</SubHighlight>
          </FlexContainer>
        </FlexContainer>
      </Heading>

      <Bio>
        I am a software engineer based in Queens, NY. When I am not coding, there is a good chance you'll catch me playing basketball, or if the weather permits, hiking with my dogs.
      </Bio>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: {id: {eq: "d9b4b835-ad68-5f84-9ddc-25c6559fb72e"}}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }
`;

const Heading = styled.div`
  margin-bottom: 0.5rem;
`

const Highlight = styled.div`
  font-size: 2rem;
  line-height: 1;
`
const SubHighlight = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  margin-top: 5px;
  max-width: 222px;
`

const Bio = styled.p`
  text-indent: 170px;
`

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
`

export default IndexPage;

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

import "@fontsource/playfair-display";
import { MainHeader } from "../Header/header";
import "./layout.css";

interface LayoutProps {
  children: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <MainHeader />
      <Section>
        <Main>{children}</Main>
      </Section>
      <Footer>© 2021 Supui Lam.</Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 100px auto;
  height: 100%;
`;

const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/2;
  min-height: 80vh;
`;

const Footer = styled.footer`
  padding: 0 10%;
`;


export default Layout;

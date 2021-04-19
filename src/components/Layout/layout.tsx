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
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
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

  const [navIsOpen, setIsNavOpen] = React.useState<boolean>(false);
  const toggleNav = () => setIsNavOpen(!navIsOpen);
  const closeNavMenu = () => { if (navIsOpen) setIsNavOpen(false); };

  return (
    <>
      <MainHeader toggleNav={toggleNav} />
      <NavigationMenu
        open={navIsOpen}
        closeNavMenu={closeNavMenu}
      />
      <Section>
        <Main>{children}</Main>
      </Section>
      <Footer>© 2021 Supui Lam.</Footer>
      <Overlay open={navIsOpen} onClick={closeNavMenu} />

    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Footer = styled.footer`
  padding: 0 10%;
`;

const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/2;
  min-height: 80vh;
  z-index: 0
`;

const Overlay = styled.div<{ open?: boolean; }>`
  left: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  width: 100vw;
  z-index: 1;
  transition: visibility 0.3s, background 0.3s, backdrop-filter 0.3s;

  &[open] {
    background: rgba(0,0,0, 0.3);
    backdrop-filter: blur(1px);
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 100px auto;
  height: 100%;
`;

export default Layout;

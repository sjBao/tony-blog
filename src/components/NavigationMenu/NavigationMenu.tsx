import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

import { FlexContainer } from '../FlexContainer/flex-container';


interface MainNavProps {
  open?: boolean;
}

interface NavigationMenuProps extends MainNavProps {
  toggleNav(): void;
}

export const NavigationMenu: React.FunctionComponent<NavigationMenuProps> = ({ open, toggleNav }) => {

  const closeMenu = () => {
    if (open) toggleNav();
  };

  return (
    <MainNav open={open}>
      <FlexContainer direction="column">
        <CloseMenuButton onClick={closeMenu}>
          <TiDeleteOutline />
        </CloseMenuButton>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </FlexContainer>
    </MainNav>
  );
};

const NavLink = styled(Link)`
  color: whitesmoke;
  display: block;
  font-family: futura;
  font-size: 1.5rem;
  font-variant: small-caps;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover, &:focus {
    cursor: pointer;
    text-decoration: underline;
    outline: none;
  }
`;

const CloseMenuButton = styled.button`
  background: none;
  border: none;
  color: whitesmoke;
  font-size: 1.5rem;
  margin 1rem;
  width: 100%;

  &:focus {
    cursor: pointer;
    outline: none;
  }
`;

const MainNav = styled.nav<MainNavProps>`
  background-color: #222;
  color: whitesmoke;
  height: 100vh;
  left: ${({ open }) => open ? 0 : '-20vh'};
  position: fixed;
  top: 0;
  transition: left .3s ease;
  width: 20vh;
  z-index: 3;
`;
import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

import { FlexContainer } from '../FlexContainer/flex-container';


interface MainNavProps {
  open?: boolean;
}

interface NavigationMenuProps extends MainNavProps {
  closeNavMenu(): void;
}

export const NavigationMenu: React.FunctionComponent<NavigationMenuProps> = ({ open, closeNavMenu }) => {

  return (
    <MainNav open={open}>
      <FlexContainer direction="column">
        <CloseMenuButton onClick={closeNavMenu}>
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
  padding: 1rem 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover, &:focus {
    background: #444;
    cursor: pointer;
    outline: none;
  }
`;

const CloseMenuButton = styled.button`
  background: none;
  border: none;
  color: whitesmoke;
  font-size: 1.5rem;
  padding: 1rem 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #444;
    cursor: pointer;
  }
`;

const MainNav = styled.nav<MainNavProps>`
  --menu-width: 200px;
  
  background-color: #222;
  color: whitesmoke;
  height: 100vh;
  transform: translateX(calc(-1 * var(--menu-width)));
  position: fixed;
  top: 0;
  transition: transform 0.1s ease-in;
  width: var(--menu-width);
  z-index: 3;

  &[open] {
    transform: translateX(0px);
  }
`; 
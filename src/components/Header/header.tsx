import * as React from "react";
import { TiSocialInstagram, TiSocialLinkedin, TiThMenu } from 'react-icons/ti';
import styled from 'styled-components';

import { FlexContainer } from '../FlexContainer/flex-container';

const LINKEDIN_URL: string = "https://www.linkedin.com/in/supuilam/";
const INSTAGRAM_URL: string = "https://www.instagram.com/bammbony/";

interface MainHeaderProps {
  toggleNav(): void;
}

export const MainHeader: React.FunctionComponent<MainHeaderProps> = (props) => (
  <Header>
    <FlexContainer justify="space-between">
      <NavMenuButton onClick={props.toggleNav} >
        <TiThMenu />
      </NavMenuButton>
      <FlexContainer>
        <SocialLink href={INSTAGRAM_URL} target="blank">
          <TiSocialInstagram />
        </SocialLink>
        <SocialLink href={LINKEDIN_URL} target="blank" >
          <TiSocialLinkedin />
        </SocialLink>
      </FlexContainer>
    </FlexContainer>
  </Header>
);


const Header = styled.header`
  background: whitesmoke;
  height: 50px;
  padding: 0 10%;
  position: fixed;
  width: 100%;
`;

const SocialLink = styled.a`
  font-size: 1.25rem;
  padding: 10px;
  text-decoration: none;

  &:visited {
    color: inherit;
  };

  &:hover, &:focus {
    background: #ccc;
    outline: none;
  }
`;

const NavMenuButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
`;
import * as React from "react";
import { Link } from "gatsby";
import { TiSocialInstagram, TiSocialLinkedin, TiThMenu } from 'react-icons/ti';
import styled from 'styled-components';

const LINKEDIN_URL: string = "https://www.linkedin.com/in/supuilam/";
const INSTAGRAM_URL: string = "https://www.instagram.com/bammbony/";


export const MainHeader: React.FunctionComponent = () => (
  <Header>
    <FlexBox justify="space-between">
      <TiThMenu />
      <FlexBox>
        <SocialLink href={INSTAGRAM_URL}>
          <TiSocialInstagram />
        </SocialLink>
        <SocialLink href={LINKEDIN_URL}>
          <TiSocialLinkedin />
        </SocialLink>
      </FlexBox>
    </FlexBox>
  </Header>
);


const Header = styled.header`
  background: whitesmoke;
  height: 50px;
  padding: 0 10%;
  position: fixed;
  width: 100%;
`;

const FlexBox = styled.div<{ justify?: string; }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify ?? 'center'};
`;

const SocialLink = styled.a`
  font-size: 1.25rem;
  padding: 10px;
  text-decoration: none;

  &:visited {
    color: inherit;
  };
`;
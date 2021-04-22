import { Link } from 'gatsby';
import styled from 'styled-components';


export const TagLink = styled(Link)`
  color: #444;
  font-size: 0.8rem;
  text-decoration: none;

  &:after {
    content: ', ';
  }

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;
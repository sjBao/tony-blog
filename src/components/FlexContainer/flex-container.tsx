import styled from 'styled-components';

type align = "center" | "flex-start" | "flex-end";
type direction = "row" | "column";
type justify = "center" | "flex-start" | "flex-end" | "space-around" | "space-between";

interface FlexContainerProps {
  align?: align;
  direction?: direction;
  justify?: justify;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  align-items: ${props => props.align || 'center'};
  display: flex; 
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
`;

import styled from "styled-components";
import breakpoints from "../theme/breakpoint";


export const OnlyMobile = styled.div<{ media?: number }>`
  @media (min-width: ${props => props.media}px) {
    display: none;
  }
`;

OnlyMobile.defaultProps = { media: breakpoints.phablet };

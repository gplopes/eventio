import styled from "styled-components";

/// Themes
import { fadeIn } from "../../theme/keyframes";
import colors from '../../theme/colors';
import { fontSecondary } from '../../theme/fonts';
import breakpoints from '../../theme/breakpoints';

type Props = {
  bg?: string;
};

export const BannerStyled = styled.div<Props>`
  display: none;
  @media (min-width: ${breakpoints.phablet}px) {
    overflow: hidden;
    position: relative;
    width: 47%;
    max-width: 480px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 80px 60px;
    background-color: ${colors.text};
    background-size: cover;
    background-image: url(${props => props.bg});
  }
`;

export const Quote = styled.div`
  max-width: 350px;
  text-align: center;
  color: white;
  animation: ${fadeIn} 0.5s ease;

  h3 {
    font-family: ${fontSecondary};
  }
  p {
    color: ${colors.greyRegent};
  }

  hr {
    width: 12px;
    height: 2px;
    background-color: ${colors.primary};
  }
`;

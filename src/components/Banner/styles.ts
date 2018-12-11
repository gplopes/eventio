import styled from "styled-components";
import { fadeIn } from "../../theme/keyframes";

type Props = {
  bg?: string;
};

export const BannerStyled = styled.div`
  overflow: hidden;
  position: relative;
  width: 47%;
  max-width: 480px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 80px 60px;
  background-color: ${({ theme }) => theme.color.text};
  background-size: cover;
  background-image: url(${(props: Props) => props.bg});
 /* @include media($breakpoint-tablet) {
    display: none;
  } */
`;

export const Quote = styled.div`
  max-width: 350px;
  text-align: center;
  color: white;
  animation: ${fadeIn} 0.5s ease;

  h3 {
    /* font-family: $font-secondary; */
  }
  p {
    /* color: $colors-grey-regent; */
  }

  hr {
    width: 12px;
    height: 2px;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

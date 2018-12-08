import styled, { css, keyframes } from "styled-components";

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
  /* padding: 80px $global-padding; */
  /* background-color: $colors-text; */
  background-size: cover;
  ${(props: Props) =>
    props.bg &&
    css`
      background-image: url(${props.bg});
    `} /* @include media($breakpoint-tablet) {
    display: none;
  } */
`;

const fadeIn = keyframes`
  from {
    transform: translate3d(0,50%,0);
    opacity: 0;
  }
  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
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
    /* background-color: $colors-primary; */
  }
`;

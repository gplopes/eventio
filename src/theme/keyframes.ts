import { keyframes } from "styled-components";

/////////////////////////////////// PopIn

export const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1);
    transform-origin: center;
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/////////////////////////////////// FadeIn
export const fadeIn = keyframes`
  from {
    transform: translate3d(0,50%,0);
    opacity: 0;
  }
  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;

/////////////////////////////////////// BounceInUp
export const bounceInUp = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

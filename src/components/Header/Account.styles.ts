import styled from "styled-components";

export const AccountContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  .Avatar {
    will-change: transform, opacity;
    /* animation: popIn 0.5s $easing-inOutExpo; */
  }
`;

export const Button = styled.div`
  margin: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:after {
    content: "";
    margin-left: 8px;
    width: 10px;
    height: 10px;

    background-image: url("/static/icon/icon-dropdown.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  &:hover {
    /* color: $colors-blue-spruce; */
    &:after {
      background-image: url("/static/icon/icon-dropdown-dark.svg");
    }
  }

  /* @include media($breakpoint-mobile) {
    p {
      display: none;
    }
    &:after {
      margin-left: 0;
    }
  } */
`;

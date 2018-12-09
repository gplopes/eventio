import styled from "styled-components";

export const Header = styled.header`
  padding: 39px 0;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 15px;

  .container {
    max-width: 1380px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* @include media($breakpoint-mobile) {
    .Header-msg {
      display: none;
    }
  } */
`;


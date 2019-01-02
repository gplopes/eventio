import styled from "styled-components";

import colors from '../../theme/colors';

export const ListItemStyled = styled.div`
  position: relative;
  background: white;
  padding: 25px 32px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
  color: ${colors.blueSpruce};
  text-align: left;
  h6 {
    margin-bottom: 0;
  }

  /* @include media($breakpoint-tablet-ls) {
    padding: 20px;
    h6 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    .ListItem-owner {
      display: none;
    }

    .Button {
      //position: absolute;
      // bottom: 13px;
      // right: 32px;
    }
  } */
`;


export const ListInfoStyled = styled.a`
  width: 50%;
  & > * {
    width: 50%;
  }
  /* @media(max-width: ${100}px) {
    width: 100%;
    & > * {
      width: 100%;
    }
  } */
`;

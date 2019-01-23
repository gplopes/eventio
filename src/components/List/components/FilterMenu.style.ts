import styled, { css } from "styled-components";

import colors from "../../../theme/colors";
import breakpoints from '../../../theme/breakpoints';
import { outQuart } from "../../../theme/easing";

export const FilterMenuStyled = styled.div`
  position: relative;
  /* font-size: $font-size-small; */
  /* font-weight: $weight-semibold; */
  color: ${colors.greyChateau};
  cursor: pointer;

  .selected {
    margin-left: 8px;
    &:hover {
      color: black;
    }
  }
`;

////////////////////////////////////////////////////////  List & Dropdown

const cssDesktopListMenu = css`
  display: inline-block;
  position: relative;
  background: transparent;
  width: auto;
  box-shadow: none;
  li {
    list-style: none;
    display: inline-block;
    /* font-size: $font-size-small; */
    /* font-weight: $weight-semibold; */
    text-transform: uppercase;
    padding: 0 34px 0 0;
    color: ${colors.greyChateau};
    transition: color 0.2s ${outQuart};
    div {
      cursor: pointer;
    }

    &:hover {
      color: ${colors.greyIron};
    }
    &.active {
      color: $colors-blue-spruce;
    }
  }
`;

export const ListMenuStyled = styled.ul`
  z-index: 10;
  display: none;
  position: absolute;
  width: 100%;
  top: 100%;
  background: white;
  text-align: left;
  /* padding: $global-padding; */
  text-transform: uppercase;
  box-shadow: 0 1px 50px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  div {
    cursor: pointer;
    padding: 10px 0;
    &:hover {
      color: ${colors.blueSpruce};
    }
  }

  @media (min-width: ${breakpoints.phablet}px) {
    ${cssDesktopListMenu}
  }

  ${props =>
    // Toggle Menu
    props.open &&
    css`
      display: block;
    `}
`;

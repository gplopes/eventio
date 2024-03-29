import React from "react";
import Link from "next/link";
import styled from "styled-components";

import urls from '../../../routes/urls';

// Theme
import colors from '../../../theme/colors';

//////////////////////////////////////// Styled

const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  padding-top: 15px;

  ul {
    position: relative;
    min-width: 115px;
    padding: 6px 0;
    background-color: white;
    box-shadow: 0 1px 50px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &:after {
      content: "";
      position: absolute;
      top: -20px;
      right: 15px;
      width: 28px;
      height: 28px;
      background-image: url("/static/triangle.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  li {
    list-style: none;
    padding: 5px 20px;
  }
  a {
    color: ${colors.greyChateau};
    display: block;
    &:hover {
      color: ${colors.text};
    }
  }
`;


/////////////////////////// Types

type Props = {
  setLogout(): void;
};

const defaultProps: Props = {
  setLogout() {}
};


/////////////////////////////////////// UI

function Dropdown(props: Props) {
  const { setLogout } = props;
  return (
    <DropdownContainer>
      <ul>
        <li>
          <Link href={urls.PROFILE} prefetch>
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <a onClick={setLogout}>Logout</a>
        </li>
      </ul>
    </DropdownContainer>
  );
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;

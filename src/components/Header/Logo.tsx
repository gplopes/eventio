import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import ReactSVG from 'react-svg';

/////////////////////////////////// Types

type Props = {
  light: boolean;
};

////////////////////////////////////// Styled

const LogoIcon = styled.div`
  width: 29px;
  height: 29px;
  background-image: url("/static/logo-dark.svg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  ${(props: Props) =>
    props.light &&
    css`
      background-image: url("/static/logo.svg");
      /* @include media($breakpoint-tablet) {
      background-image: url("/static/logo-dark.svg");
    } */
    `}
`;

//////////////////////////////////////////////////////// UI
function Logo(props: Props = { light: true }) {
  return (
    <Link href="/">
      <a>
       <ReactSVG svgClassName="TEST" src="/static/logo-dark.svg" />
      </a>
    </Link>
  );
}

export default Logo;

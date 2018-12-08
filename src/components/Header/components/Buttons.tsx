import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Icon from "../../Icon/Icon";

//////////////////////////////////////////// Styled

const HeaderButton = styled.a`
  /* color: $colors-blue-spruce;
  font-weight: $weight-semibold;
  font-size: $font-size-small;
  line-height: $font-size-small; */
  text-transform: uppercase;
  p {
    margin-top: 4px;
  }
`;

////////////////////////////////////////////// UI: Close Item

type CloseProps = {
  href: string;
};

export function CloseIcon(props: CloseProps) {
  return (
    <Link href={props.href}>
      <HeaderButton className="flex-row">
        <Icon type={Icon.Type.close} size={Icon.Size.small} />
        <p>Close</p>
      </HeaderButton>
    </Link>
  );
}

/////////////////////////////////////////// UI: Back Item

type BackProps = {
  href: string;
  name: string;
};

export function BackIcon(props: BackProps) {
  return (
    <Link href={props.href}>
      <HeaderButton className="flex-row">
        <Icon type={Icon.Type.back} />
        <p>{props.name}</p>
      </HeaderButton>
    </Link>
  );
}

export default CloseIcon;

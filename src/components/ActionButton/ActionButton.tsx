import React from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon";

/// Theme
import { inOutBack } from "../../theme/easing";
import { bounceInUp } from "../../theme/keyframes";
import colors from '../../theme/colors';

///////////////////////////////////// Props

type Props = {
  onClick(): void;
};

//////////////////////////////////// Styled

const Button = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  width: 56px;
  height: 56px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${colors.dark};
  box-shadow: 0 6px 9px 0 rgba(53, 53, 53, 0.1);
  transition: transform 0.2s ${inOutBack};
  animation: ${bounceInUp} 0.7s ${inOutBack} 0.5s backwards;
  &:hover {
    background-color: black;
  }
`;

////////////////////////////////// UI

export default function ActionButton(props: Props) {
  return (
    <Button onClick={props.onClick}>
      <Icon type={Icon.Type.plus} />
    </Button>
  );
}

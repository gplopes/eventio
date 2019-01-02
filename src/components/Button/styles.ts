import styled, { css } from "styled-components";
import { SizeType, ButtonType } from "./Button";

import colors from '../../theme/colors';

type Props = {
  loading?: boolean;
  disabled?: boolean;
  size?: SizeType;
  color?: ButtonType;
};

/////////////////////////// Styles

const getColor = (props: Props) => {
  switch (props.color) {
    case ButtonType.alert:
      return css`
        color: white;
        background-color: ${colors.alert};
        &:hover {
          opacity: 0.9;
          background-color: ${colors.alertHover};
        }
      `;
    case ButtonType.dark:
      return css`
        color: white;
        background-color: ${colors.blueSpruce};
        &:hover {
          opacity: 0.9;
          background-color: ${colors.blueSpruceHover};
        }
      `;
    case ButtonType.update:
      return css`
        color: ${colors.greyAluminium};
        background-color: ${colors.greyMischka};
        &:hover {
          opacity: 0.9;
          background-color: ${colors.greyMischkaHover};
        }
      `;

    case ButtonType.disabled:
      return css`
        opacity: 0.5;
        cursor: auto;
        color: ${colors.greyAluminium};
        background-color: ${colors.greyMischka};
      `;

    default:
      return css`
        color: white;
        background-color: ${colors.primary};

        &:hover {
          opacity: 0.9;
          background-color: ${colors.primaryHover};
        }
      `;
  }
};

const getSize = (props: Props) => {
  switch (props.size) {
    case SizeType.small:
      return css`
        height: 32px;
        line-height: 36px;
        min-width: 100px;
        letter-spacing: 1px;
      `;

    case SizeType.big:
      return css`
        min-width: 230px;
      `;

    default:
      return null;
  }
};


///////////////////////////////////////// Components

export const Button = styled.button<Props>`
 outline: none;
  display: inline-block;
  height: 50px;
  padding: 0 20px;
  line-height: 49px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.2s $easing-inQuad;

  ${getColor}
  ${getSize}

  ${(props) => props.loading &&
    css`
      pointer-events: none;
      cursor: auto;
    `}

  ${(props) => props.disabled &&
    css`
      cursor: auto;
    `}
`;

import styled, { css } from "styled-components";
import { SizeType, ButtonType } from "./Button";

type Props = {
  loading?: boolean;
  disabled?: boolean;
  size?: SizeType;
  type?: ButtonType;
};

/////////////////////////// Styles

const getColor = (props: Props) => {
  switch (props.type) {
    case ButtonType.alert:
      return css`
        color: white;
        background-color: ${({ theme }) => theme.color.alert};
        &:hover {
          background-color: darken($colors-red-strawberry, 3);
        }
      `;
    case ButtonType.dark:
      return css`
        color: white;
        background-color: $colors-blue-spruce;
        &:hover {
          background-color: darken($colors-blue-spruce, 3);
        }
      `;
    case ButtonType.update:
      return css`
        color: $colors-grey-aluminium;
        background-color: ${({ theme }) => theme.color.greyMischka};
        &:hover {
          background-color: darken($colors-grey-mischka, 3);
        }
      `;

    case ButtonType.disabled:
      return css`
        opacity: 0.5;
        cursor: auto;
        color: $colors-grey-aluminium;
        background-color: ${({ theme }) => theme.color.greyMischka};
      `;

    default:
      return css`
        color: white;
        background-color: ${({ theme }) => theme.color.primary};

        &:hover {
          background-color: darken($colors-primary, 3);
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

///////////////////////////////////// Button

export const Button = styled.button`
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

  ${(props: Props) =>
    props.loading &&
    css`
      pointer-events: none;
      cursor: auto;
    `}

  ${(props: Props) =>
    props.disabled &&
    css`
      cursor: auto;
    `}

  .Icon {
    margin: 0 auto;
  }
`;

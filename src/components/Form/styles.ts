import styled, { css } from "styled-components";

// Theme
import { inQuad, inOutExpo } from "../../theme/easing";
import colors from "../../theme/colors";

////////////////////////////////// Wrap

export const InputWrap = styled.div`
  margin-top: 25px;
  min-height: 59px;
  text-align: left;
`;

/////////////////////////////////// InputField

type InputType = {
  focus: boolean;
  invalid: boolean;
};

export const InputField = styled.div<InputType>`
  display: flex;
  width: 100%;
  transition: border 0.2s ${inQuad};
  border-bottom: 1px solid ${colors.greyGeyser};

  ${props =>
    props.focus &&
    css`
      border-bottom-color: ${colors.dark};
    `}

  ${props =>
    props.invalid &&
    css`
      border-bottom-color: ${colors.alert};
    `}
`;

/////////////////////////////////////////////// Input

export const Input = styled.input`
  outline: none;
  position: relative;
  z-index: 2;
  border: 0;
  background-color: transparent;
  height: 33px;
  line-height: 33px;
  width: 100%;

  &[type="password"] {
    letter-spacing: 3px;
  }
`;

/////////////////////////////////////////////// Label

export const Label = styled.span<{ open: boolean }>`
  will-change: transform;
  color: ${colors.text};
  height: 33px;
  line-height: 33px;
  z-index: 1;
  position: absolute;
  transition: all 0.2s ${inOutExpo};

  ${props =>
    props.open &&
    css`
      font-size: 13px;
      transform: translate3d(0, -80%, 0);
    `}
`;

/////////////////////////////////////////// Alert

export const Alert = styled.div`
  color: ${colors.alert};
`;

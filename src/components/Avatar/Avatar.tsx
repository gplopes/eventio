import React from "react";
import styled, { css } from "styled-components";


/// Theme
import { popIn } from "../../theme/keyframes";
import { inOutExpo } from "../../theme/easing";
import colors from '../../theme/colors';

/////////////////////////////////// Type

type Props = {
  image?: string;
  initials?: string;
  size?: "small" | "big";
  extend?: any;
};

/////////////////////////////////////////////// Styled

const AvatarStyled = styled.div<Props>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.greyMischka};
  color: ${colors.greyRegent};
  font-weight: 500;
  padding-top: 2px;
  will-change: transform, opacity;
  animation: ${popIn} 0.5s ${inOutExpo};

  ${(props) => props.image && css`background-image: url(${props.image});`}

  ${(props) =>
    props.size === "big" &&
    css`
      width: 120px;
      height: 120px;
      font-size: 3rem;
    `}

    ${(props) => props.extend && props.extend}
`;

//////////////////////////////////////////////////////////// UI

function Avatar(props: Props) {
  const { image, initials, size, extend } = props;
  return (
    <AvatarStyled image={image} size={size} extend={extend}>
      {!image && initials && <p>{initials}</p>}
    </AvatarStyled>
  );
}

Avatar.defaultProps = {
  size: "small"
};

export default Avatar;

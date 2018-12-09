import React from "react";
import styled, { css } from "styled-components";
import { popIn } from '../../theme/keyframes';
import { inOutExpo } from '../../theme/easing';

/////////////////////////////////// Type

type Props = {
  image?: string;
  initials?: string;
  size?: "small" | "big";
};

/////////////////////////////////////////////// Styled

const AvatarStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.greyMischka};
  color: ${({ theme }) => theme.color.greyRegent};
  font-weight: 500;
  padding-top: 2px;
  will-change: transform, opacity;
  animation: ${popIn} 0.5s ${inOutExpo};

  ${(props: Props) =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  ${(props: Props) =>
    props.size === "big" &&
    css`
      width: 120px;
      height: 120px;
      font-size: 3rem;
    `}
`;

//////////////////////////////////////////////// UI

function Avatar(props: Props) {
  const { image, initials, size } = props;
  return (
    <AvatarStyled image={image} size={size}>
      {!image && initials && <p>{initials}</p>}
    </AvatarStyled>
  );
}

Avatar.defaultProps = {
  size: "small",
}

export default Avatar;

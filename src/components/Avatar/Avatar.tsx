import React from "react";
import styled, { css } from "styled-components";

/////////////////////////////////// Type

type Props = {
  image?: string;
  initials?: string;
  size?: "small" | "big";
};

const defaultProps: Props = {
  size: "small",
  initials: "XX"
};

/////////////////////////////////////////////// Styled

const AvatarStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: $colors-grey-mischka;
  color: $colors-grey-regent;
  font-weight: $weight-medium; */
  padding-top: 2px;

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
  const { image, initials, size } = Object.assign({}, defaultProps, props);
  return (
    <AvatarStyled image={image} size={size}>
      {!image && initials && <p>{initials}</p>}
    </AvatarStyled>
  );
}

export default Avatar;

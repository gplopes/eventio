import React from "react";
import styled from "styled-components";

///////////////////////// Type

type Props = {
  name?: string;
};

/////////////////////// Styled

const Tag = styled.div`
  display: inline-block;
  padding: 5px 16px;
  color: ${({ theme }) => theme.color.greyRegent};
  background-color: ${({ theme }) => theme.color.greyMischka};
  border-radius: 20px;
`;

//////////////////////////////// UI
function TagName(props: Props) {
  return <Tag>{props.name}</Tag>;
}

export default TagName;

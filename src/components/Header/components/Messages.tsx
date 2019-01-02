import React from "react";
import Link from "next/link";
import styled from "styled-components";

import colors from '../../../theme/colors';

///////////////////////////////////// Styled

const MsgContainer = styled.p`
  font-size: 14px;
  color: ${colors.textInvert};
  a {
    color: ${colors.greyRegent};
    /* font-weight: $weight-semibold; */
    &:hover {
      color: ${colors.blueSpruce};
    }
  }
`;


////////////////////////////////////// UI: Dont have account

export function NonAuth() {
  return (
    <MsgContainer>
      Don’t have account?{" "}
      <Link href="/signup">
        <a>SIGN UP</a>
      </Link>
    </MsgContainer>
  );
}

////////////////////////////////////// UI: Already have account

export function HaveAccount() {
  return (
    <MsgContainer>
      Already have an account?{" "}
      <Link href="/login">
        <a>SIGN IN</a>
      </Link>
    </MsgContainer>
  );
}
